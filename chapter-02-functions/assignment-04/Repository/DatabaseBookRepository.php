<?php

namespace App\Repository;

use App\Model\Book;
use App\Interfaces\Repository\BookRepository;

class DatabaseBookRepository implements BookRepository {
    public function save(Book $book): void {
        // logic to save book in database (empty for now)
    }
}