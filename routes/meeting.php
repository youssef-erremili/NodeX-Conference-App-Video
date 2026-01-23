<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/join-meeting', function () {
    return Inertia::render('meeting/Index'); 
})->name('join-meeting');