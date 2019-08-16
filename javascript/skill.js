/*
 * object/prototype for skills in skill section
*/

var Skill = function(id, icon, link) {
  this.id = id;
  this.icon = icon;
  this.link = link;

  var that = Object.create(Skill.prototype);

  that.skill = function() {
    var box = document.createElement("a");

    // general skill div elt
    $(box).attr('href', link);
    $(box).attr('target', '_blank');
    $(box).addClass('skill-box');
    box.id = id;
    $("#skills-container").append(box);

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
