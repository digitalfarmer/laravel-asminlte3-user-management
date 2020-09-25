<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class TestController extends Controller
{
    

    public function index()
    {
        # code...
        $odoo = new \Edujugon\Laradoo\Odoo();
        $odoo = $odoo->connect();
        //$userId= $odoo->version();
        $can = $odoo->can('read', 'res.partner');
        return (string)$can;
    }
}
