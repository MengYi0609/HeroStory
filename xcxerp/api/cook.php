<?php
include_once("../includes/init.php");

$action = isset($_GET['action']) ? $_GET['action'] : "";

$json = array("msg"=>null,"result"=>false,"data"=>null);

if($action == "cookcate")  //注册
{
  if($_POST)
  {
    $cook = isset($_POST['cateid']) ? $_POST['cateid'] : false;
    if(!$cook)
    {
      $json['msg'] = "无分类信息";
      return json($json);
    }
    $user = $db->select()->from("foodcate")->all();
    if($user)
    {
      $json['result'] = true;
      $json['data'] = $user;
      return json($json);
    }else{
      $json['msg'] = '无分类信息';
      $json['result'] = false;
      return json($json);
    }
  }
}




?>
