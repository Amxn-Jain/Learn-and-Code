<?php

namespace App\Printer;

use App\Interfaces\Printer\Printer;

class HtmlPrinter implements Printer {
    public function printPage(string $page): void {
        echo "<div style='single-page'>$page</div>";
    }
}