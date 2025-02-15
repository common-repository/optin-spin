<?php

/**
 * Class optinspin_Wheel
 */
class optinspin_Wheel extends optinspin_Subscriber {

    function __construct() {
        add_shortcode('woo_the_wheel',array($this,'optinspin_woo_the_wheel'));
        add_action('wp_head',array($this,'optinspin_wheel_script'));
        add_action('wp_footer',array($this,'optinspin_fortune_open'));
        add_action('wp_footer',array($this,'optinspin_clickable_tab'));
        add_action('wp_footer',array($this,'optinspin_rotate_mobile_popup'),99);
        add_action( 'admin_menu', array($this,'optinspin_settings_menu'),5 );
    }
    
    function optinspin_clickable_tab() {
        $clickable_desktop = 0; $clickable_mobile = 0;
        ?>
        <script>
        
            jQuery(document).ready(function() {
                var clickable_desktop = 0; var clickable_mobile = 0;
                <?php
                if( !empty(carbon_get_theme_option('optinspin_enable_clickable_tab_desktop') ) ) {
                    ?> clickable_desktop = 1; <?php
                }                
            
                if( !empty( carbon_get_theme_option('optinspin_enable_clickable_tab_mobile') ) ) {
                    ?> clickable_mobile = 1; <?php
                }                    
                ?>
                
                var window_width = jQuery(window).width();
                
                if( window_width <= 768 && clickable_mobile == 1 && getCookie('optinspin_use') == '' ) {
                    jQuery('#bottom_spin_icon').removeClass('hide');
                } else if ( window_width > 768 && clickable_desktop == 1 && getCookie('optinspin_use') == '') {
                    jQuery('#bottom_spin_icon').removeClass('hide');
                }
            });
            
        </script>
        <?php
    }

    function optinspin_rotate_mobile_popup() {
        $html = '<div class="optinspin-rotate-mob">
                    <div class="optinsin-rotote-content">
                        <div class="optinspin-rotate-img"><img src="'. optinspin_PLUGIN_URL . 'assets/img/rotate-mobile.png"> </div>
                        <div class="optinspin-rotate-msg">Kinly get back to your previous orientation view... your wheel is rolling there...</div>
                    </div>
                </div>';
        echo $html;
    }

    function optinspin_get_segment_colors() {

        $sections = carbon_get_theme_option('crb_section');
        $segments_colors = array();

        // Getting All Section colors in the loop and save them in array
        foreach( $sections as $section ) {

            $color = $section['segment_color'];

            if(empty($color)) // IF Don't have any coupon
                $color = '#364c62';

            $segments_colors[] = $color;

        }

        // segment_color
        return $segments_colors;
    }

    function optinspin_woo_the_wheel() {
        if( $this->optinspin_get_segments() > 0 )
            return $this->optinspin_wheel_canvas();
    }

    function optinspin_wheel_canvas() {
        $html = '<div class="woo-wheel-roll-bg"></div>
                <div class="woo-wheel-roll" id="opinspin-wheel-roll">
                <div class="woo-wheel-bg-img"></div>';
                $html .= '<div class="optinspin-right">
                    <div class="optinspin-cross-wrapper"><div class="optinspin-cross-label">'.carbon_get_theme_option('optinspin_cross_label').'</div><div class="optinspin-cross"></div></div>
                    <div class="toast">
                        <p/>
                    </div>';


                $html .= $this->optinspin_get_logo();
                $html .= $this->winning_lossing_text();
//                $html .= '<div class="optinspin-intro">'.$this->optinspin_get_general_settings()['optinspin_intro_text'].'</div>';
                $html .= $this->optinspin_form_fields();
//                $html .= $this->optinspin_initially_try_luck_btn();
                $html .= $this->optinspin_error_notify();
                $html .= $this->optinspin_privacy_link();
                $html .= '</div>';
                $html .= '<div class="optinspin-left">

                    <div class="optinspin-canvas">
                    <div class="wheelContainer">
                    <svg class="wheelSVG" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" text-rendering="optimizeSpeed">
                        <defs>
                            <filter id="shadow" x="-100%" y="-100%" width="550%" height="550%">
                                <feOffset in="SourceAlpha" dx="0" dy="0" result="offsetOut"></feOffset>
                                <feGaussianBlur stdDeviation="9" in="offsetOut" result="drop" />
                                <feColorMatrix in="drop" result="color-out" type="matrix" values="0 0 0 0   0
                          0 0 0 0   0
                          0 0 0 0   0
                          0 0 0 .3 0" />
                                <feBlend in="SourceGraphic" in2="color-out" mode="normal" />
                            </filter>
                        </defs>
                        <g class="mainContainer">
                        <g class="wheel">
                            <!-- <image  xlink:href="http://example.com/images/wheel_graphic.png" x="0%" y="0%" height="100%" width="100%"></image> -->
                        </g>
                        </g>
                        <g class="centerCircle" />
                        <g class="wheelOutline" />
                        <g class="pegContainer" opacity="1">
                            <path class="peg" fill="#EEEEEE" d="M22.139,0C5.623,0-1.523,15.572,0.269,27.037c3.392,21.707,21.87,42.232,21.87,42.232 s18.478-20.525,21.87-42.232C45.801,15.572,38.623,0,22.139,0z" />
                        </g>
                        <g class="valueContainer" />
                    </svg>

                    </div>
                    </div>
                </div>';
                $html .= '</div>';

        //$html .= $this->optinspin_side_luck_btn();
        return $html;
    }

    function optinspin_error_notify() {
        $html = '<div class="optinspin-error"></div>';
        return $html;
    }

    function optinspin_get_logo() {
        $html = '<div class="optinspin-logo">
                    <img src="'.carbon_get_theme_option('optinspin_logo').'" class="optinspin-wheel-logo" />
                </div>';

        return $html;
    }

    function optinspin_side_luck_btn() {
        $html = '<div class="woo-try_btn" id="optinspin-simple-btn">Try Your Luck</div>';
        return $html;
    }

    function optinspin_form_fields() {
        global $optinspin_Chatchamp;
        $name_field = carbon_get_theme_option('optinspin_name_label');
        $name_field = ($name_field != '') ? 'block' : 'none';
        $username = ''; $user_email = '';
        if( is_user_logged_in() ) {
            $user_info = get_userdata(get_current_user_id());
            $username = $user_info->user_login;
            $user_email = $user_info->user_email;
        }
        $html = '<div class="optinspin-intro">'.$this->optinspin_get_general_settings()['optinspin_intro_text'].'</div>
                    <div class="optinspin-from">';
                    if( $optinspin_Chatchamp->optinspin_chatchamp_is_enabled() ) {
                        $html .= $optinspin_Chatchamp->optinspin_chatchamp_html();
                        $html .= $optinspin_Chatchamp->optinspin_hide_form();
                    }
        $html .= '<form class="toggle-disabled">
                    <div class="optinspin-name field-'.$name_field.'" style="display: '. $name_field .'">
                        <input type="text" placeholder="'.carbon_get_theme_option('optinspin_name_label').'" autocomplete="off" class="optinspin-form-field optinspin-name optinspin-'.$name_field.'" value="'.$username.'" name="optinspin-name">
                    </div>
                    <div class="optinspin-email">
                        <input type="text" placeholder="'.carbon_get_theme_option('optinspin_email_label').'" autocomplete="off"  class="optinspin-form-field optinspin-email" value="'.$user_email.'" name="optinspin-email">
                    </div>
                    <div class="optinspin-sub-btn">

                        <input type="button" class="optinspin-form-btn" id="optinspin-simple-btn" value="'.carbon_get_theme_option('optinspin_button_label').'" name="optinspin-sub-btn">
                        <input type="button" class="spinBtn" style="display:none">
                    </div>
                    </form>

                    <div class="lds-css ng-scope">
                          <div style="width:100%;height:100%" class="lds-rolling">
                            <div></div>
                          </div>
                      </div>
                </div>';
        return $html;
    }

    function optinspin_get_segments() {

        $sections = carbon_get_theme_option('crb_section');
        $segments_each = array(); $segments_array = array();
        $counter = 0;

        // Getting All Section in the loop
        foreach( $sections as $section ) {
            $counter++;

            $label = $section['optinspin_section_label'];

            $generate_coupon = ''; $coupon_discount = ''; $coupon_expire_days = '';
            if( !empty($section['optinspin_section_generate_coupon']) )
                $generate_coupon = $section['optinspin_section_generate_coupon'];

            if( !empty($section['optinspin_section_discount']) )
                $coupon_discount = $section['optinspin_section_discount'];

            if( !empty($section['optinspin_section_discount_expiry_day']) )
                $coupon_expire_days = $section['optinspin_section_discount_expiry_day'];

            $probability = $section['optinspin_probability'];
            $winning_lossing_text = $section['optinspin_win_loss_text'];

            if(empty($section['optinspin_coupon'])) // IF Don't have any coupon
                $coupon = ' - ';
            else
                $coupon = $section['optinspin_coupon'];

            $win = true;

            if( $section['_type'] == 'no_prize' )
                $win = false;

            $coupon_type = ''; $coupon_code_label = ''; $coupon_link_label = ''; $coupon_link_url = '';
            if( isset($section['optinspin_coupon_type']) && $section['optinspin_coupon_type'] == 'woocommere_coupon' ) {
                $coupon_type = 'woocommerce';
            } else if( isset($section['optinspin_coupon_type']) && $section['optinspin_coupon_type'] == 'coupon_text' ) {
                $coupon_type = 'coupon_text';
                $coupon_code_label = $section['optinspin_coupon_text_label'];
            } else if( isset($section['optinspin_coupon_type']) && $section['optinspin_coupon_type'] == 'coupon_link' ) {
                $coupon_type = 'coupon_link';

                $coupon_link_label = $section['optinspin_coupon_link_label'];
                $coupon_link_url = $section['optinspin_coupon_link_url'];
            } else if( isset($section['optinspin_coupon_type']) && $section['optinspin_coupon_type'] == 'edd_coupon' ) {
                $coupon_type = 'edd_coupon';
                $coupon = get_the_title( $section['optinspin_edd_coupon'] );
            }

            if( empty( carbon_get_theme_option('optinspin_duration_type' ) ) )
                $wheel_duration_type = 'day';
            else
                $wheel_duration_type = carbon_get_theme_option('optinspin_duration_type' );

            $segments_each['probability'] = $probability;
            $segments_each['type'] = 'string';
            $segments_each['value'] = $label;
            $segments_each['win'] = $win;
            $segments_each['resultText'] = $winning_lossing_text;
            $segments_each['userData'] = array("score" => 10);
            $segments_each['couponCode'] = $coupon;
            $segments_each['generated_coupon'] = $generate_coupon;
            $segments_each['generated_discount_coupon'] = $coupon_discount;
            $segments_each['coupon_expiry_day'] = $coupon_expire_days;
            $segments_each['coupon_type'] = $coupon_type;
            $segments_each['coupon_label'] = $coupon_code_label;
            $segments_each['coupon_link_label'] = $coupon_link_label;
            $segments_each['coupon_link_url'] = $coupon_link_url;
            $segments_each['duration_type'] = $wheel_duration_type;
            $segments_each['user_ip'] = $this->optinspin_user_ip();

            $segments_array[] = $segments_each;
        }
        return $segments_array;
    }

    function optinspin_user_ip() {
        $client  = @$_SERVER['HTTP_CLIENT_IP'];
        $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
        $remote  = $_SERVER['REMOTE_ADDR'];

        if(filter_var($client, FILTER_VALIDATE_IP))
        {
            $ip = $client;
        }
        elseif(filter_var($forward, FILTER_VALIDATE_IP))
        {
            $ip = $forward;
        }
        else
        {
            $ip = $remote;
        }

        return $ip;
    }

    // General Settings of Optin Spin
    function optinspin_get_general_settings() {
        $general = array();
        $general['optinspin_allowed_users'] = carbon_get_theme_option('optinspin_allowed_users');
        $general['optinspin_spin_speed'] = carbon_get_theme_option('optinspin_spin_speed');
        $general['optinspin_no_of_spin'] = carbon_get_theme_option('optinspin_no_of_spin');
        $general['optinspin_text_size'] = carbon_get_theme_option('optinspin_text_size');
        $general['optinspin_wheel_logo'] = carbon_get_theme_option('optinspin_wheel_logo');
        $general['optinspin_logo'] = carbon_get_theme_option('optinspin_logo');
        $general['optinspin_background_color'] = carbon_get_theme_option('optinspin_background_color');
        $general['optinspin_border_color'] = carbon_get_theme_option('optinspin_border_color');
        $general['optinspin_inner_border_color'] = carbon_get_theme_option('optinspin_inner_border_color');
        $general['optinspin_border_width'] = carbon_get_theme_option('optinspin_border_width');
        $general['optinspin_text_color'] = carbon_get_theme_option('optinspin_text_color');
        $general['optinspin_background_image'] = carbon_get_theme_option('optinspin_background_image');
        $general['optinspin_wheel_border_color'] = carbon_get_theme_option('optinspin_wheel_border_color');
        $general['optinspin_email_label'] = carbon_get_theme_option('optinspin_email_label');
        $general['optinspin_button_label'] = carbon_get_theme_option('optinspin_button_label');
        $general['optinspin_intro_text'] = carbon_get_theme_option('optinspin_intro_text');
        if( !empty( carbon_get_theme_option('optinspin_enable_sound') )) // Check Sound is enable or not
            $general['optinspin_enable_sound'] = true;
        else
            $general['optinspin_enable_sound'] = false;

        return $general;
    }

    function optinspin_total_segments() {
        $total_sections = count( carbon_get_theme_option('crb_section') );
        return $total_sections; // Total Segments in the Wheel
    }

    function winning_lossing_text() {
        $html = '<div class="winning_lossing">
                    <div class="optinspin-win-info">'.carbon_get_theme_option('optinspin_coupon_message').'</div>
                    <div class="optinspin-btn">
                        <div class="optinspin-decline-coupon" style="display: none;"><span>OR</span><a href="javascript:void(0)" class="optinspin-coupon-decline">'.carbon_get_theme_option('optinspin_skip_btn').'</a></div>
                    </div>
                </div>';
        $html .= '<div class="win-coupon" style="display:none"></div>';
        return $html; // Text after winning or losing
    }

    function optinspin_spin_speed() {
        return (float) carbon_get_theme_option('optinspin_spin_speed');
    }

    function optinspin_number_of_spin() {
        return (float) carbon_get_theme_option('optinspin_no_of_spin');
    }

    function optinspin_form() {
        $html = '<div class="woo-form"><form>';
        $html .= '<label>Email</label>';
        $html .= '<input type="text" />';
        $html .= '<label>Name</label>';
        $html .= '<input type="text" />';
        $html .= '<input type="button" value="Try Your Luck" />';
        $html .= '</form></div>';

        return $html;
    }

    function optinspin_wheel_script() {
        echo do_shortcode('[woo_the_wheel]');
        ?>
        <style>
            .woo-wheel-roll {
                background-color: <?php echo carbon_get_theme_option('optinspin_background_color') ?>;
            }
            .woo-wheel-bg-img:before {
                background-image: url(<?php echo carbon_get_theme_option('optinspin_background_image')?>);
                width: 100%;
                height: 100%;
                bottom: 20px;
                opacity: 1;
            }
            #optinspin-simple-btn {
                background-color: <?php echo carbon_get_theme_option('optinspin_buttons_color') ?> !important;
                color: <?php echo carbon_get_theme_option('optinspin_buttons_text_color') ?>  !important;;
            }
            #optinspin-simple-btn:hover {
                background-color: <?php echo carbon_get_theme_option('optinspin_buttons_hover_color') ?>  !important;
            }
            .optinspin-add-to-cart {
                background-color: <?php echo carbon_get_theme_option('optinspin_add_cart_bg_color') ?>  !important;
                margin: 10px;
            }
            <?php echo carbon_get_theme_option('optinspin_custom_css')?>
        </style>
        <?php
    }

    function optinspin_initially_try_luck_btn() {
        $html = '<div class="optinspin-try-luck-btn" id="optinspin-simple-btn">Want To Try Your Luck!</div>';
        return $html;
    }

    function optinspin_privacy_link() {
        $label = carbon_get_theme_option('optinspin_privacy_label');
        $page = carbon_get_theme_option('optinspin_privacy_page');
        $html = '';
        if( $page != 'none' ){
            $html = '<div class="optinspin-privacy"><a href="'.$page.'">'.$label.'</a></div>';
        }

        return $html ;
    }

    function optinspin_fortune_open() {
        global $post;

        $this->optinspin_get_segments();
        $click_popup = carbon_get_theme_option('optinspin_enable_intent_clickable_popup');
        $btn_class = '';
        if( empty($click_popup) ) {
            $btn_class = 'hide';
        }
        $html = '<div id="bottom_spin_icon" class="optinspin-click-btn '.$btn_class . '">
                    <div class="spin_icon_text">
                        <span class="privy-floating-text">'.carbon_get_theme_option('optinspin_spinner_label').'  </span>
                    </div>
                    <div class="spin_icon_img">
                            <img src="'. optinspin_PLUGIN_URL .'/assets/img/fortune-icon.png" >
                    </div>

                </div>';

        echo $html;
    }

    function optinspin_settings_menu() {
        add_submenu_page( 'crb_carbon_fields_container_optin_spin.php', 'Settings', 'Settings',
            'manage_options', '?page=crb_carbon_fields_container_optin_spin.php');
    }
}