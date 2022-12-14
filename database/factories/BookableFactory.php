<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class BookableFactory extends Factory
{
    protected $suffix = [
        'Villa',
        'Hous',
        'Cottage',
        'Luxury Villas',
        'Cheap Hous',
        'Rooms',
        'Cheap Rooms',
        'Luxury Rooms',
        'Fansy Rooms'
    ];


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->city . ' ' . Arr::random($this->suffix),
            'description' => $this->faker->text()
        ];
    }
}
