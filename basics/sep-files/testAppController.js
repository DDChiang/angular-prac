var testApp1 = angular.module("testApp", []);
	
    testApp1.controller("myCtrl", function ($scope) {
        $scope.fName = "Deedee";
        $scope.lName = "Chiang";

        //static numbers
        $scope.i1Name = "beans"; $scope.i2Name = "apples";
        $scope.i1Quant = 2; $scope.i2Quant = 5;
        $scope.i1Price = .20; $scope.i2Price = 1.29;
		$scope.gItems = $scope.i1Name + " " + $scope.i2Name;
        $scope.gQuant = " " + ($scope.i1Quant + $scope.i2Quant) + " items ";
        $scope.gTotal = ($scope.i1Quant * $scope.i1Price) + ($scope.i2Quant * $scope.i2Price);

		//for each
		$scope.names = [{name:"joe", city:"LA"},{name:"DD", city:"Infinity"},{name:"vision internet", city:"crapton"}];
		$scope.names1 = [{name:"joe", city:"LA"},{name:"DD", city:"Infinity"},{name:"vision internet", city:"crapton"}];

		//dynamic shopping pt.1
		$scope.list = [{name:"beans", quant: 120, price:  .25}, {name: "apples", quant: 4, price: 1.25}, {name: "bananas", quant: 5, price: 1.89 }, {name: "greens", quant: 2, price: .5}];
		$scope.listItemsTotal = function() {
			totalItems = 0;
			c = 0;
			listL = $scope.list.length;
			
			for (;c<listL;)
			{
				totalItems = totalItems + $scope.list[c].quant;
				//totalItems += $scope.list[c].quant;
				c++;
			}
			
			return parseInt(totalItems);
		}
		$scope.listPriceTotal = function() {
			totalPrice = 0;
			pc = 0;
			listL = $scope.list.length;
			
			for (;pc<listL;) {
				totalPrice = totalPrice + ($scope.list[pc].price * $scope.list[pc].quant);
				pc++;
			}
			return totalPrice;
		}
		
    });