<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:mycode';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test command to check the functionality of some scripts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $response = Http::withHeaders([
            'Accept-Encoding' => 'gzip, deflate'
        ])->get('http://www.linkedin.com/in/kamal-aminu-33abb4179/');
        // $get = file_get_contents('https://www.linkedin.com/in/kamal-aminu-33abb4179/');
        dd($response->body());
        // function searchNum($list, $target, $start, $end)
        // {
        //     echo PHP_EOL;
        //     echo  'start at- ' . $start . ' to ' . $end;
        //     echo PHP_EOL;

        //     $mid = round(($end + $start) / 2);
        //     if ($target == $list[$mid]) {
        //         return $target . ' -found at index- ' . $mid;
        //     } elseif ($target < $list[$mid]) {
        //         $end = $mid - 1;
        //     } else {
        //         $start = $mid + 1;
        //     }

        //     $mid = round(($end + $start) / 2);

        //     if ($target == $list[$mid]) {
        //         return $target . ' -found at index- ' . $mid;
        //     } elseif ($target < $list[$mid]) {
        //         $end = $mid - 1;
        //         return searchNum($list, $target, $start, $end);
        //     } else {
        //         $start = $mid + 1;
        //         return searchNum($list, $target, $start, $end);
        //     }

        //     return false;
        // }

        // $arr = [];
        // for ($i = 0; $i < 911000; $i++) {
        //     $arr[$i] = $i + 1;
        // }
        // $arrLenght = count($arr) - 1;
        // $result = searchNum($arr, 5567, 0, $arrLenght);
        // echo PHP_EOL;
        // var_dump($result);
        // return 0;


    }
}
