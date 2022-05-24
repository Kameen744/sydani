<?php

namespace App\Spiders;

use Generator;
use RoachPHP\Http\Request;
use RoachPHP\Http\Response;
use RoachPHP\Spider\BasicSpider;
use RoachPHP\Spider\ParseResult;
use RoachPHP\Extensions\LoggerExtension;
use RoachPHP\Extensions\StatsCollectorExtension;
use RoachPHP\Downloader\Middleware\RequestDeduplicationMiddleware;

class InternLinkedInProfile extends BasicSpider
{
    public array $startUrls = [
        'https://sydani.org/'
        // 'https://www.linkedin.com/in/kamal-aminu-33abb4179/'
    ];

    /**
     * @return Generator<ParseResult>
     */
    public function parse(Response $response): Generator
    {
        echo 'started';
    }

    /** @return Request[] */
    protected function initialRequests(): array
    {
        return [
            new Request(
                'GET',
                "https://sydani.org",
                [$this, 'parse']
            ),
        ];
    }
}
