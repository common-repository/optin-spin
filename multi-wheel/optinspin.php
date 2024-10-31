<?php

define('optinspin_PLUGIN_URL', plugin_dir_url( __FILE__ ));
define('optinspin_PLUGIN_PATH', plugin_dir_path( __FILE__ ));

function optinspin_session_start() {
    if ( session_status() !== PHP_SESSION_ACTIVE )
        session_start();
}

function optinspin_crb_get_i18n_suffix() {
    $suffix = '';
    if ( ! defined( 'ICL_LANGUAGE_CODE' ) ) {
        return $suffix;
    }
    $suffix = '_' . ICL_LANGUAGE_CODE;
    return $suffix;
}

function optinspin_get_post_meta($post_id,$key) {

    if( !empty( carbon_get_post_meta($post_id,$key) ) ) {
        return carbon_get_post_meta($post_id,$key);
    } else {
        return carbon_get_post_meta($post_id,$key.optinspin_crb_get_i18n_suffix());
    }

}

add_action('wp_loaded','optinspin_session_start');

$wheel_main_id = 0;

// ADD CARBON FIELD LIBRARY
if( is_admin() && get_post_type() == 'optin-wheels' ) {
    include 'inc/settings/carbon-fields/carbon-fields-plugin.php';
}

// Email Subscribers
include 'inc/classes/admin/class-optinspin-subscribers.php';
$optinspin_email_subscriber = new optinspin_Subscriber();

// MyCred
include 'inc/classes/mycred/class-mycred-settings.php';
$mycred_optinspin = new OptinSpin_MyCred_Settings();

// Woo The Wheel
include 'inc/classes/class-optinspin-wheel.php';
$optinspin_woo_the_wheel = new optinspin_Wheel();

// OptinSpino Protect
include 'inc/classes/class-optinspin-protect.php';
$optinspin_protect_post = new optinspin_Protect();

// Woo The Wheel
include 'inc/classes/class-optinspin-chatchamp.php';
$optinspin_Chatchamp = new optinspin_Chatchamp();

// Pages Suggestion
//include 'inc/classes/admin/class-optispin-pages-suggestion.php';

// Woo The Wheel Admin Settings
include 'inc/classes/class-optinspin-settings.php';
$optinspin_settigns = new optinspin_Settings();

// Woo The Wheel
include 'inc/classes/class-optinspin-coupon-request.php';
$optinspin_coupon_request = new optinspin_Coupon_Request();

// Woo The Wheel
include 'inc/classes/admin/class-optinspin-wheel-preview.php';
//$optinspin_woo_the_wheel_preview = new optinspin_Wheel_Preview();

// Woo Stats
include 'inc/classes/admin/class-optinspin-statistics.php';
$optinspin_statistics = new optinspin_Statistics();

// Woo Stats
include 'inc/classes/admin/class-optinspin-setting-steps.php';
$setting_sections = new Setting_Sections();

// OptinSpin MultiWheel PostType
include 'inc/classes/class-optinspin-post-type.php';
$optin_wheels = new Optin_Wheels();

// OptinSpin MultiWheel PostType
include 'inc/classes/admin/class-optinspin-pro-page.php';
$Optinspin_Get_Pro = new Optinspin_Get_Pro();

function myplugin_init() {
    foreach( $_POST as $key => $value ) {
        if( is_array($value) )
            echo '$key ' . $key . ' - ' . print_r($value ). '<br>';
        else
            echo '$key ' . $key . ' - ' . $value . '<br>';
    }
}

//add_action( 'init', 'myplugin_init' );

add_filter( 'views_edit-optin-statistics', 'so_13813805_add_button_to_views' );
function so_13813805_add_button_to_views( $views ) {
    $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $views['export-optin-list'] = '<a href="'.$actual_link.'&export=1" id="export-optin-list" type="button" class="button button-primary button-large" title="Export Optin List" style="margin: 0px;height: 20px;line-height: 16px;font-size: 12px;">Export Optin List</a>';
    return $views;
}

function optinspin_crb_get_i18n_theme_option( $option_name ) {
    $suffix = optinspin_crb_get_i18n_suffix();
    if(!empty(carbon_get_theme_option( $option_name . $suffix ))){
        return carbon_get_theme_option( $option_name . $suffix );
    } else {
        return carbon_get_theme_option( $option_name );
    }
}

function optinspin_wheel_script_style() {
    wp_enqueue_script( 'jquery' );
    wp_enqueue_style( 'optinspin-style-css', optinspin_PLUGIN_URL . 'assets/css/style-css.css' );
    wp_enqueue_script( 'optinspin-script-js', optinspin_PLUGIN_URL . 'assets/js/script.js' );
}
add_action( 'wp_enqueue_scripts', 'optinspin_wheel_script_style',99 );

function optinspin_admin_wheel_script() {
    if( get_post_type() == 'optin-wheels' ) {
        wp_enqueue_style( 'optinspin-font-awesome-style', 'https://use.fontawesome.com/releases/v5.0.10/css/all.css' );
        wp_enqueue_style( 'optinspin-admin-setting-style', optinspin_PLUGIN_URL . 'assets/css/setting-style.css' );
        wp_enqueue_script( 'optinspin-admin-setting-script', optinspin_PLUGIN_URL . 'assets/js/setting-script.js' );

        wp_enqueue_style( 'optinspin-admin-style', optinspin_PLUGIN_URL . 'assets/css/admin-style.css' );
        wp_enqueue_script( 'optinspin-admin-script-backend', optinspin_PLUGIN_URL . 'assets/js/admin-script.js' );
    }
        $ajaxurl = array(
            'ajaxurl' => admin_url('admin-ajax.php')
        );
        wp_localize_script( 'optinspin-admin-script', 'php_data', $ajaxurl );

}
add_action( 'admin_enqueue_scripts', 'optinspin_admin_wheel_script' );

function optinspin_update_posts() {

	$args = array(
			'public'   => true,
			'_builtin' => false
	);

	$output = 'names'; // names or objects, note names is the default
	$operator = 'or'; // 'and' or 'or'

	$post_types = get_post_types(  $args, $output, $operator );
	update_option('optinspin_available_posts',$post_types);
}
register_activation_hook( __FILE__, 'optinspin_update_posts' );

add_action('wp_ajax_optinspin_mailchimp_get_list', '_optinspin_mailchimp_get_list');
add_action('wp_ajax_nopriv_optinspin_mailchimp_get_list', '_optinspin_mailchimp_get_list');

function _optinspin_mailchimp_get_list() {

	if (isset($_POST['action']) && $_POST['action'] == 'optinspin_mailchimp_get_list' && isset($_POST['_optinspin_mailchimp_api_key'])) {
		if (!empty(trim($_POST['_optinspin_mailchimp_api_key']))) {
			$_optinspin_mailchimp_api_keyful = $_POST['_optinspin_mailchimp_api_key'];
			$_optinspin_mailchimp_api_key = explode('-', $_optinspin_mailchimp_api_keyful);
			$prefix = $_optinspin_mailchimp_api_key[1]; //at the end of your API Key, there is a -us1, or us2, etc......you want the prefix to be the us2 for examples.
			//Let's go Get a LIST ID for the subscriber list we are going to be putting content in.
			$get_lists = 'http://' . $prefix . '.api.mailchimp.com/1.3/?method=lists';

			
			$data = array();
			$data['apikey'] = $_optinspin_mailchimp_api_keyful;
			$post_str = '';
			foreach ($data as $key => $val) {
				$post_str .= $key . '=' . urlencode($val) . '&';
			}
			$post_str = substr($post_str, 0, -1);
		
			$response = wp_remote_post( 'http://' . $prefix . '.api.mailchimp.com/1.3/?method=lists&apikey='.$_optinspin_mailchimp_api_keyful);
		
			if (!empty($response['body'])) {
				update_option('optinspin_mailchimp_get_list', $response['body']);
				$jsondecoded = json_decode($response['body']);

				if (!empty($jsondecoded->data)) {
					$options .= '<option value="" >Select Email List</option>';
					foreach ($jsondecoded->data as $datavalue) {
						$options .= '<option value="' . $datavalue->id . '" >' . trim(ucfirst($datavalue->name)) . '</option>';
					}
				}
				$return = array(
						'statuss' => true,
						'response' => $options
				);
				echo json_encode($return);
			} else {
				$return = array(
						'statuss' => false,
						'response' => '',				
				);
				echo json_encode($return);
			}
			die();
		}
	}
	die();
}

add_action('optinspin_save_email','optinspin_save_email_to_email_subcriber',10,3);

function optinspin_save_email_to_email_subcriber($email,$name,$Post_id){
	//email save to mailchimp
	global $wp_query,$optinspin_woo_the_wheel;

	$page_id = $wp_query->get_queried_object_id();

	if( empty($page_id) )
		$page_id = get_the_ID();


	$wheel_id = $optinspin_woo_the_wheel->get_optinspin_wheel( $page_id );

    if(empty($name)){
        $name = 'GUEST';
    }

	if(
		!empty(carbon_get_post_meta($wheel_id, 'optinspin_mailchimp_api_key' ))
			and
		!empty($email)
			and
		!empty($name)
			and
		!empty($Post_id)
			and
		!empty(carbon_get_post_meta($wheel_id, 'crb_show_socials' ))
		){
			$apiKey = carbon_get_post_meta($wheel_id, 'optinspin_mailchimp_api_key' );
			$listId = carbon_get_post_meta($wheel_id, 'crb_show_socials' );
			
			if(carbon_get_post_meta($wheel_id, 'opt_ins' ) == 'single'){
				$status = 'subscribed';
			} else if(carbon_get_post_meta($wheel_id, 'opt_ins' ) == 'double') {
				$status = 'pending';
			}

			$data = [
				'email'     => $email,
				'status'    => $status,
				'firstname' => $name,
				'lastname'  => ''
			];

			$json = json_encode([
				'email_address' => $data['email'],
				'status'        => $data['status'], // "subscribed","unsubscribed","cleaned","pending"
				'merge_fields'  => [
					'FNAME'     => $data['firstname'],
					'LNAME'     => $data['lastname']
				]
			]);

			$api_key = $apiKey;
			$email = $email;
			$status = $status; // subscribed, cleaned, pending
			$list_id = $listId;
		
			// STOP Configuring -------------------------------
		 
			$args = array(
				'method' => 'PUT',
				 'headers' => array(
					'Authorization' => 'Basic ' . base64_encode( 'user:'. $api_key )
				),
				'body' => $json
			);
			$response = wp_remote_post( 'https://' . substr($api_key,strpos($api_key,'-')+1) . '.api.mailchimp.com/3.0/lists/' . $list_id . '/members/' . md5(strtolower($email)), $args );		 

			$lists_response = wp_remote_post( 'https://' . substr($api_key,strpos($api_key,'-')+1) . '.api.mailchimp.com/3.0/lists/');		 
	}
	
}

function optinspin_admin_notice() {

	if ( !in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', carbon_get_post_meta($_SESSION['wheel_id'], 'active_plugins' ) ) ) ) {
		$class = 'notice notice-error';
		$message = __("Error! <a href='https://wordpress.org/plugins/woocommerce/' target='_blank'>WooCommerce</a> Plugin is required to activate OptinSpin", 'optinspin');

		printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr($class), $message);

		deactivate_plugins( plugin_basename( __FILE__ ) );
	}
}

//add_action( 'admin_notices', 'optinspin_admin_notice' );

add_action('admin_print_scripts', 'ure_remove_admin_notices');
function ure_remove_admin_notices() {
    global $wp_filter;
    if (is_user_admin()) {
        if (isset($wp_filter['user_admin_notices'])) {
            unset($wp_filter['user_admin_notices']);
        }
    } elseif (isset($wp_filter['admin_notices'])) {
        unset($wp_filter['admin_notices']);
    }
    if (isset($wp_filter['all_admin_notices'])) {
        unset($wp_filter['all_admin_notices']);
    }
}