<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
  public function store(Request $request) {
    $user = $request->user;
    $content = file_get_contents("data.json");
    $data = json_decode($content);
    $result = [];
    for($i = 0; $i < count($data); $i++)
    {
      if($data[$i]->name == $user['name'] && $data[$i]->discount_percentage == $user['discountPercentage'])
        array_push($result, $data[$i]); 
    }
    return $result;
  }
}
