<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class csvToJSON extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'csv-json {csv} {json}';


   /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Convert CSV File to JSON File';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @return mixed
   */
  public function handle()
  {
	  // open csv file
    $csv_filepath = public_path($this->argument('csv'));
    if (!($fp = fopen($csv_filepath, 'r'))) {
        die("Can't open file...");
    }
    
    //read csv headers
    $key = fgetcsv($fp,"1024",",");
    
    // parse csv rows into array
    $json = array();
      while ($row = fgetcsv($fp,"1024",",")) {
      $json[] = array_combine($key, $row);
    }
    
    // release file handle
    fclose($fp);
    
    // encode array to json
    file_put_contents(public_path($this->argument('json')), json_encode($json));
    return true;
  }
}