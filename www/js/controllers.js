angular.module('starter.controllers', ['ionic', 'angular-svg-round-progressbar'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
//
})

.controller('TimerCtrl', function($scope, $timeout) {
	$scope.myTimer = {};
	$scope.myTimer.value = 60;
	$scope.myTimer.started = false;
	$scope.maxTime = 60;
	
	var timer;
	
	
	
	$scope.customTimer = function() {
		$scope.myTimer.value--;
		
		if ($scope.myTimer.value == 0){
			
            $scope.$broadcast('timerStopped', 0);
			$timeout.cancel(timer);
			$scope.myTimer.value = 60;
			$scope.maxTime = 60;
			$scope.myTimer.started = false;
		} else {			
			timer = $timeout($scope.customTimer, 100);	
		}
		
	}
	
	$scope.start = function() {
		timer = $timeout($scope.customTimer, 100);
		$scope.myTimer.started = true;
	}
	
	$scope.stop = function() {
		$scope.myTimer.value = 60;
		$scope.maxTime = 60;
		complete(true);
		$timeout.cancel(timer);
		$scope.myTimer.started = false;
	}
	
	$scope.$on('timerStopped', function (event, remaining){
		if (remaining == 0){
			//alert("santo cristo");
		}
	})

	$scope.getStyle = function(){
		var transform = ('translateY(-50%) ') + 'translateX(-50%)';

		return {
			'top': '50%',
			'bottom': 'auto',
			'left': '50%',
			'transform': transform,
			'-moz-transform': transform,
			'-webkit-transform': transform,
			'font-size': $scope.radius/3.5 + 'px'
		};
	};
	
	var complete = function(forced){
		if (forced){
			//alert("aiaiai");
		} else {
			
		}
	}
	
	
	
});
