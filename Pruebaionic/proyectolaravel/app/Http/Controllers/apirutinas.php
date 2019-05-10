<?php


namespace App\Http\Controllers;
header('Access-Control-Allow-Origin: *');
use Illuminate\Http\Request;
use App\routine;

class apirutinas extends Controller
{
    //
    public function index ()
    {
      return routine::all();
    }

    public function show($param)
    {
      return routine::where('tipo',$param)->get();
    }
}
