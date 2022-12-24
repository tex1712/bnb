<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       $this->call([
            BookablesSeeder::class,
            BookingsSeeder::class,
            ReviewSeeder::class,
            UserSeeder::class
       ]);
    }
}
