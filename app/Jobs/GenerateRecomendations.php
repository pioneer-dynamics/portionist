<?php

namespace App\Jobs;

use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Bus;

class GenerateRecomendations implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $jobs = $this->prepareJobs();

        Bus::batch($jobs)
            ->name('Generate Recommendations')
            ->onQueue('batch')
            ->dispatch();
    }

    private function prepareJobs()
    {
        $jobs = collect();

        User::all()->each(function (User $user) use ($jobs) {
            $jobs->push([
                new GenerateRecomendationForUser($user, 'cocktail'),
                new GenerateRecomendationForUser($user, 'food'),
            ]);
        });

        return $jobs;
    }
}
