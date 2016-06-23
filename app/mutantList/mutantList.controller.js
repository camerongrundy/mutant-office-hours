(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['mutantService', 'firebaseDataService', textMessageService];

  function MutantListController(mutantService, firebaseDataService) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.mutants = mutantService.mutants;
    vm.newMutant = new mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }


    funtion sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants )
    }

  }
})();
