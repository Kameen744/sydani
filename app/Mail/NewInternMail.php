<?php

namespace App\Mail;

use App\Models\Gip\Intern;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewInternMail extends Mailable
{
    use Queueable, SerializesModels;

    public $intern;
    public $password;
    public $subject = 'Sydani Graduate Internship Program';
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Intern $intern, $password)
    {
        $this->intern = $intern;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Mail.NewInternMail');
    }
}
