(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('textMessageService', textMessageService);

  function textMessageService() {
    var service = {};

    return service;

    function sendText(mutant) {
      var newText = {
        name: mutant.name,
        topic: mutant.topic,
        phoneNumber: mutant.phone
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }
  }
})();
