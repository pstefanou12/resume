/*
 * object/prototype for skills in skill section
*/

var Skill = function(id, icon) {
  this.id = id;
  this.icon = icon;

  var that = Object.create(Skill.prototype);

  that.skill = function() {
    var box = document.createElement("div");

    // general skill div elt
    $(box).addClass('skill-box');
    box.id = id;
    $("#skills").append(box);

    // icon associated with specific skill
    var skillIcon = document.createElement('img');
    $(skillIcon).attr('src', 'images/' + icon);
    $(skillIcon).addClass('skill');
    box.append(skillIcon);

    // name box to hold skill name
    var nameBox = document.createElement('div');
    $(nameBox).addClass('name-box');
    box.append(nameBox);

    // skill name
    var skillName = document.createElement('span');
    $(skillName).addClass('skill-name');
    skillName.innerHTML = id;
    nameBox.append(skillName);
  };

  Object.freeze(that); // object now immutable
  return that;
}
