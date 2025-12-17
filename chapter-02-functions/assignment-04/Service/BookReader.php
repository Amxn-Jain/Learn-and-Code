<?php
namespace App\Service;

use App\Model\Book;

class BookReader {
    private Book $book;
    
    public function __construct(Book $book) {
        $this->book = $book;
    }

    public function turnPage(): void {
        // pointer to next page
    }

    public function getCurrentPage(): string {
        return "current page content";
    }
}