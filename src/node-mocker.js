//with mock functions
var mocker = (function() {
  var mock = {};
  mock.comp = function(a) {
    return b => b ? true : false;
  }

  mock.getFuntion = function(fn_target) {
    var fn = fn_target;
  }

  mock.objModifier = function(obj) {
    return prop => function(val) {
      obj[prop] = val;
    };
  }

  mock.db = function() {
    var db = {};
    db.createTable = function(table_obj) {
      db[table_obj.table_name] = table_obj;
    };

    db.addMember = function(table_name, entity) {
      db[table_name][entity.id] = entity;
    };

    db.deleteMember = function(table_name, entity_id) {
      delete db[table_name][entity_id];
    }

    db.returnMember = function(table_name, entity_id) {
      return db[table_name][entity_id];
    }

    db.updateMember = function(table_name, entity) {
      for (var val in entity) {
        db[table_name][entity.id][val] = entity[val];
      }
    }
    return db;
  }();

  mock.objectParser = function(obj) {
    let type_list = [];
    for (var prop in obj) {
      if (typeof prop === 'object' && toString.call(obj) !== '[object Array]') {
        type_list.push('object');
      }
      else if (toString.call(obj) === '[object Array]') {
        type_list.push('Array');
      }
    }
  }

  mock.randomNum = function() {
    return Math.random();
  }

  mock.randomInt = function() {
    return Math.floor(this.randomNum());
  }

  mock.randomSigneNum = function() {
    var num = this.randomNum();
    return num < 0 ? -1 * num : num;
  }

  mock.randomSignInt = function() {
    var num = this.randomInt();
    return Math.floor(num < 0 ? -1 * num : num);
  }

  mock.randomStringInput = function(size) {
    var str = '';
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(this.randomSignInt());
    }
    return str;
  }

  return mock;
}());
