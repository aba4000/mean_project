/**
 * Created by reuvenp on 4/13/2017.
 */
angular.module('myApp').controller('roomsController', ['$scope', 'pageService', 'roomsService', 'usersService', 'chatService', roomsController]);
function roomsController($scope, pageService, roomsService, usersService, chatService) {
    var vm = this;
    vm.mainData = pageService.mainData;
    vm.searchFilter = {};
    vm.usersList = usersService.usersList;
    vm.my_rooms = roomsService.my_rooms;


    pageService.setPageTitle('Rooms Management');

}