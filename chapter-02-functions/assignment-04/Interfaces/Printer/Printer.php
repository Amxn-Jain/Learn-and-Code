<?php

namespace App\Interfaces\Printer;

interface Printer {
    public function printPage(string $page): void;
}