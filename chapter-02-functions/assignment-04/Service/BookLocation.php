<?php
namespace App\Service;

use App\Model\Book;

class BookLocation {
    private Book $book;

    public function __construct(Book $book) {
        $this->book = $book;
    }

    public function getLocation(): string {
        // returns the position in the library
        // ie. shelf number & room number
        return "Shelf 5, Room 2";
    }
}