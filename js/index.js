var todu=[
	{
		id:1,
		title:'新列表1',
		list:[
			{
				content:'1111111',
				date:new Date().getTime(),
				done:false
			},
			{
				content:'222222',
				date:new Date().getTime(),
				done:true
			},
			{
				content:'333333',
				date:new Date().getTime(),
				done:true
			}
		]
	}
]
var app=angular.module('app',[]);
app.controller('icloud',function($scope){
	$scope.todu=todu;
	$scope.ids=0;
	$scope.index=0;
	$scope.leftadd=function(){
		$scope.ids=$scope.todu[$scope.todu.length-1].id+1;
		$scope.index=$scope.ids-1;
		var o={			
			id:$scope.ids,
			title:'新列表'+$scope.ids,
			list:[
			]
		};
		$scope.todu.push(o);
		$scope.flag=true;

		getNum();
	}
	$scope.flag=true;
	$scope.flags=function(){
		$scope.flag=!$scope.flag;
	}
	$scope.colors=['#CC73E1',"#60D836","#1BADF8","#F7C900","#A58861","#FF2A6B","#FF8100"]
	$scope.leftbg=function(aa){
		$scope.index=aa;
		$scope.flag=true;
		$scope.f=false;
		getNum();
	}
	$scope.adding=function(val,i,arr){
		return val.done==true?true:false;
	}
	$scope.doing=function(val,i,arr){
		return val.done==false?true:false;
	}
	getNum();
	function getNum(){
		$scope.getNum=0;
		angular.forEach($scope.todu[$scope.index].list,function(obj,i){
			if(obj.done==true){
				$scope.getNum++;
			}
		})
	}
	$scope.rightadd=function(){		
		$scope.todu[$scope.index].list.push({
			content:'',
			date:new Date().getTime(),
			done:false
		})
	}
	$scope.weiwan=function(v,type){
		v.done=type;
	}
	$scope.getTitle=function(){
		$scope.titles=$scope.todu[$scope.index].title;
		$scope.getcolor=$scope.colors[$scope.index%7];
		$scope.f=!$scope.f;
	}
	$scope.$watch("todu",function(){
		getNum();
	},true)
	$scope.changecolor=function(i){
		$scope.getcolor=$scope.colors[i];
	}
	$scope.del=function(){
		$scope.todu.splice($scope.index,1);
		$scope.f=false;
		$scope.index--;
	}
	$scope.xzok=function(){
		$scope.todu[$scope.index].title=$scope.titles;
		$scope.colors[$scope.index]=$scope.getcolor;
		$scope.f=false;
	}
	$scope.xzqx=function(){
		$scope.f=false;
	}
})