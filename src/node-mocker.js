//with mock functions
var mocker = (function() {
  var mock = {
    comp: function(a) {
      return b => b ? true : false;
    },

    getFuntion: function(fn_target) {
      var fn = fn_target;
    },

    objModifier: function(obj) {
      var mock_obj = {};
      for (var prop in obj) {
        mock_obj[prop] = obj[prop];
      }
      return mock_obj;
    },

    db: (function() {
      var db = {
        createTable: function(table_obj) {
          this[table_obj.table_name] = table_obj;
        },

        addMember: function(table_name, entity) {
          this[table_name][entity.id] = entity;
        },

        deleteMember: function(table_name, entity_id) {
          delete this[table_name][entity_id];
        },

        returnMember: function(table_name, entity_id) {
          return this[table_name][entity_id];
        },

        updateMember: function(table_name, entity) {
          for (var val in entity) {
            this[table_name][entity.id][val] = entity[val];
          }
        },
      }
      return db;
    })(),

    objectParser: function(obj) {
      let type_list = [];
      for (var prop in obj) {
        if (typeof prop === 'object' && toString.call(obj) !== '[object Array]') {
          type_list.push('object');
        }
        else if (toString.call(obj) === '[object Array]') {
          type_list.push('Array');
        }
      }
    },
    
    mockInput: {
      num: function() {
        return Math.random();
      },

      int: function() {
        return Math.floor(this.randomNum());
      },

      signeNum: function() {
        var num = this.randomNum();
        return num < 0 ? -1 * num : num;
      },

      signInt: function() {
        var num = this.randomInt();
        return Math.floor(num < 0 ? -1 * num : num);
      },

      stringInput: function(size) {
        var str = '';
        for (let i = 0; i < len; i++) {
          str += String.fromCharCode(this.randomSignInt());
        }
        return str;
      }
    },

  }
  return mock;
}());
