<?php

namespace App\Interfaces\Repository;

use App\Model\Book;

interface BookRepository {
    public function save(Book $book): void;
}