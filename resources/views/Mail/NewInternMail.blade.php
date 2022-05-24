@component('mail::message')
# Sydani Graduate Internship Program
<strong>Dear {{$intern->name}},</strong>
<br>
Your account has been created. The button below will take you to a login page. <br>
<p>Login Details:</p>
<p><b>Email:</b> {{$intern->email}}</p>
<p><b>Password:</b> {{$password}}</p>

@component('mail::button', ['url' => 'https://dev.sydani.org/sgip/login'])
    Login to your account
@endcomponent

Thanks,<br>
SGIP
@endcomponent
