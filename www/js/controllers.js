angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // ion-view events test 20160530
  $scope.$on("$ionicView.loaded", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.enter", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.leave", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.beforeEnter", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.beforeLeave", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.afterEnter", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.afterLeave", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicView.unloaded", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicParentView.enter", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicParentView.leave", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicParentView.beforeEnter", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicParentView.beforeLeave", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicParentView.afterEnter", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });
  $scope.$on("$ionicParentView.afterLeave", function(event, data){
     // handle event
     // console.log("State Params: ", data.stateParams);
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

// $ionicLoadingConfig test 50%
.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
})

.controller('DashCtrl', function($scope, $ionicActionSheet, $ionicBackdrop, $ionicLoading, $ionicPopover,
                                $ionicModal, $ionicPopup, $ionicTabsDelegate, $ionicNavBarDelegate,
                                $ionicHistory, $ionicListDelegate, $timeout, $rootScope, $http) {
  // ion-list test 2016.05.31
  $scope.listData = {
    listItems:[
      {
        img:'img/adam.jpg',
        title:'adam',
        description:'adam\'s pics'
      },
      {
        img:'img/ben.png',
        title:'ben',
        description:'ben\'s pics'
      },
      {
        img:'img/mike.png',
        title:'mike',
        description:'mike\'s pics'
      }
    ],
    shouldShowDelete: false,
    shouldShowReorder: false,
    listCanSwipe: true,
    share: function (item) {
      console.log(item);
    },
    edit: function (item) {
      console.log(item);
    },
    reorderItem: function(item, fromIndex, toIndex) {
      $scope.listData.listItems.splice(fromIndex, 1);
      $scope.listData.listItems.splice(toIndex, 0, item);
    },
    deleteItem: function(item) {
      $scope.listData.listItems.splice($scope.listData.listItems.indexOf(item), 1);
    },
    // $ionicListDelegate test
    showDeleteButtons: function() {
      $ionicListDelegate
      // .showDelete(true)
      // .showReorder([showReorder])
      // .canSwipeItems([canSwipeItems])
      .closeOptionButtons()
      // .$getByHandle(handle)
      ;
    }
  };

  // action sheet test 2016.05.29
  // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     destructiveText: 'Delete',
     cancel: function() {
          // add cancel code..
          console.log("cancel func called");
        },
     buttonClicked: function(index) {
      console.log("index : " + index);
       return true;
     },
     destructiveButtonClicked: function () {
      console.log("destructive Button Clicked");
       return true;
     },
     cancelOnStateChange: true,
     cssClass: 'customCss'
   });

   // For example's sake, hide the sheet after two seconds
   // $timeout(function() {
   //   hideSheet();
   // }, 2000);

 };

  // backdrop test 2016.05.29
  //Show a backdrop for one second
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 2000);
  };

  // Execute action on backdrop disappearing
  $scope.$on('backdrop.hidden', function() {
    // Execute action
    console.log('backdrop.hidden');
  });

  // Execute action on backdrop appearing
  $scope.$on('backdrop.shown', function() {
    // Execute action
    console.log('backdrop.shown');
  });

  // ionrefresher test
  $scope.itemsArr = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/mock/ionrefresher.json')
     .success(function(newItems) {
       $scope.itemsArr = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };

  // $ionicLoading test
  $scope.showLoading = function() {
    $ionicLoading.show({
      template: 'Loading...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
       $timeout(function() {
        $scope.hideLoading();
    }, 2000);
    });
  };
  $scope.hideLoading = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };

  // $ionicLoadingConfig test 50%
  $scope.showCustomLoading = function() {
    //options default to values in $ionicLoadingConfig
    $ionicLoading.show().then(function(){
       console.log("The loading indicator is now displayed");
       $timeout(function() {
        $ionicLoading.hide().then(function(){
         console.log("The loading indicator is now hidden");
        });
    }, 2000);
    });
  };

  // $ionicModal test 50%
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput:false,
    backdropClickToClose:true,
    hardwareBackButtonClose:true
  }).then(function(modal) {
    // console.log("modal promise then func called");
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    console.log("openModal func called");
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    console.log("closeModal func called");
    $scope.modal.hide();
  };
  $scope.removeModal = function() {
    console.log("closeModal func called");
    $scope.modal.remove();
  };
  $scope.isModalShown = function() {
    console.log("closeModal func called");
    $scope.modal.isShown();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    console.log("modal's $destroy event is triggered");
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    console.log("modal.hidden event is triggered");
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    console.log("modal.removed event is triggered");
    // Execute action
  });

  // $ionicPopover test 50%
  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">fromTemplate Popover Title</h1> </ion-header-bar> <ion-content> Hello fromTemplate! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
    focusFirstInput:false,
    backdropClickToClose:true,
    hardwareBackButtonClose:true
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  $scope.isPopoverShown = function() {
    $scope.popover.isShown();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  // $ionicPopup test
  // Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    title: 'Enter Wi-Fi Password', // String. The title of the popup.
    cssClass: '', // String, The custom CSS class name
    subTitle: 'Please use normal things', // String (optional). The sub-title of the popup.
    template: '<input type="password" ng-model="data.wifi">', // String (optional). The html template to place in the popup body.
    templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
    scope: $scope, // Scope (optional). A scope to link to the popup content.
    buttons: [
      { // Array[Object] (optional). Buttons to place in the popup footer.
        text: 'Cancel',
        type: 'button-default',
        onTap: function(e) {
          // e.preventDefault() will stop the popup from closing when tapped.
          e.preventDefault();
        }
      },
      {
        text: 'OK',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            // Returning a value will cause the promise to resolve with the given value.
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 6000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Consume Ice Cream', // String. The title of the popup.
      cssClass: '', // String, The custom CSS class name
      subTitle: '', // String (optional). The sub-title of the popup.
      template: 'Are you sure ?', // String (optional). The html template to place in the popup body.
      templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
      cancelText: '', // String (default: 'Cancel'). The text of the Cancel button.
      cancelType: '', // String (default: 'button-default'). The type of the Cancel button.
      okText: '', // String (default: 'OK'). The text of the OK button.
      okType: '', // String (default: 'button-positive'). The type of the OK button.
    });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
    title: 'Don\'t eat that!', // String. The title of the popup.
    cssClass: '', // String, The custom CSS class name
    subTitle: '', // String (optional). The sub-title of the popup.
    template: 'It might taste good', // String (optional). The html template to place in the popup body.
    templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
    okText: '', // String (default: 'OK'). The text of the OK button.
    okType: '', // String (default: 'button-positive'). The type of the OK button.
  });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };

 // A prompt dialog
 $scope.showPrompt = function() {
    $ionicPopup.prompt({
      title: 'Password Check', // String. The title of the popup.
      cssClass: '', // String, The custom CSS class name
      subTitle: '', // String (optional). The sub-title of the popup.
      template: 'Enter your secret password', // String (optional). The html template to place in the popup body.
      templateUrl: '', // String (optional). The URL of an html template to place in the popup body.
      inputType: 'password', // String (default: 'text'). The type of input to use
      defaultText: '',// String (default: ''). The initial value placed into the input.
      maxLength: null, // Integer (default: null). Specify a maxlength attribute for the input.
      inputPlaceholder: 'Your password',// String (default: ''). A placeholder to use for the input.
      cancelText: 'Cancel',// String (default: 'Cancel'. The text of the Cancel button.
      cancelType: 'button-default',// String (default: 'button-default'). The type of the Cancel button.
      okText: 'OK',// String (default: 'OK'). The text of the OK button.
      okType: 'button-positive'// String (default: 'button-positive'). The type of the OK button.
    })
    .then(function(res) {
       console.log('Your password is', res);
    })
    .then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // $ionicTabsDelegate test
  $scope.selectTabWithIndex = function(index) {
    console.log(index);
    $ionicTabsDelegate.select(index); //Select the tab matching the given index.
    // .selectedIndex() The index of the selected tab, or -1.
    // .showBar(show) Set/get whether the ionTabs is shown
    // .$getByHandle(handle) Example: $ionicTabsDelegate.$getByHandle('my-handle').select(0);
  };
  // $ionicNavBarDelegate test
  // not work correctly
  $scope.setNavTitle = function(title) {
    $ionicNavBarDelegate.title(title);
    // .align([direction]) Available: 'left', 'right', 'center'.
    // .showBackButton([show]) Whether to show the back button.
    // .showBar(show) whether the ionNavBar is shown.
    // .title(title) Set the title for the ionNavBar.
  };

  // $ionicHistory test
  $scope.testHistory = function () {
    // $ionicHistory.viewHistory(); all the views and histories
    // $ionicHistory.currentView(); The app’s current view.
    // $ionicHistory.currentHistoryId(); The ID of the history stack which is the parent container of the current view.
    // $ionicHistory.currentTitle([val]); Gets and sets the current view’s title.
    // $ionicHistory.backView(); Returns the view that was before the current view in the history stack.
    // $ionicHistory.backTitle(); Gets the back view’s title.
    // $ionicHistory.forwardView(); Returns the view that was in front of the current view in the history stack.
    // $ionicHistory.currentStateName(); Returns the current state name.
    // $ionicHistory.goBack([backCount]); Navigates the app to the back view, if a back view exists.
    // $ionicHistory.removeBackView(); Remove the previous view from the history completely, including the cached element and scope.
    // $ionicHistory.clearHistory(); Clears out the app’s entire history, except for the current view.
    // $ionicHistory.clearCache(); Removes all cached views within every ionNavView.
    // $ionicHistory.nextViewOptions(); Sets options for the next view.
    // Available options:
    // disableAnimate: Do not animate the next transition.
    // disableBack: The next view should forget its back view, and set it to null.
    // historyRoot: The next view should become the root view in its history stack.

  };






































});
