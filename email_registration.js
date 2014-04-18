/**
 * Implements hook_form_alter().
 */
function email_registration_form_alter(form, form_state, form_id) {
  try {
    if (form_id == 'user_login_form') {
      form.elements['name'].title = 'E-mail';
    }
    else if (form_id == 'user_register_form') {
      form.elements['name'].type = 'hidden';
      form.elements['name'].default_value = 'email_registration_' + user_password();
      form.elements['mail'].title = 'E-mail';
    }
  }
  catch (error) { console.log('email_registration_form_alter - ' + error); }
}
