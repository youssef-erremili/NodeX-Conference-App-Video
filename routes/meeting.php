<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/join-meeting', function () {
    return Inertia::render('meeting/JoinMeeting');
})->name('join-meeting');

Route::get('/meeting-room', function () {
    return Inertia::render('meeting/MeetingRoom');
})->name('meeting-room');
