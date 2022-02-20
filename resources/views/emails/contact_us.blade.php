@component('mail::message')
# From Daniel Homes' Contact Page

Name: {{ $request->fullname }} <br>
Phone Number: {{ $request->phone }} <br>
Email: {{ $request->email }} <br> <br>
Message: <br> {{ $request->message }} <br>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
