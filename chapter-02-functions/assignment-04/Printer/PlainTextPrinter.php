<?php

namespace App\Printer;

use App\Interfaces\Printer\Printer;

class PlainTextPrinter implements Printer {
    public function printPage(string $page): void {
        echo $page;
    }
}