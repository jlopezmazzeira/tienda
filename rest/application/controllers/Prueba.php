<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Prueba extends REST_Controller {

  public function __construct()
  {
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");
    
    parent::__construct();
    $this->load->database();
  }

  public function index()
  {
    echo "Hola";
  }

  public function obtener_productos_get($codigo)
  {
    $query = $this->db->query("SELECT * FROM productos where codigo ='".$codigo."'");
    //echo json_encode($query->result());
    $this->response($query->result());
  }
}
