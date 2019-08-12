/*
 * entire skill timeline/dashboard
*/

$(document).ready(function() {
  var skills = {
    'React': Skill('React', 'react.png'),
    'Redux': Skill('Redux', 'redux.png'),
    'Node': Skill('Node', 'node.svg.png'),
    'D3': Skill('D3', 'd3.png'),
    'CSS': Skill('CSS', 'css.svg.png'),
    'SASS': Skill('SASS', 'sass.svg'),
    'HTML': Skill('HTML', 'html.png'),
    'JavaScript': Skill('JavaScript', 'javascript.png'),
    'jQuery': Skill('jQuery', 'jquery.png'),
    'Python': Skill('Python', 'python.png'),
    'Flask': Skill('Flask', 'flask.png'),
    'Java': Skill('Java', 'java.png'),
    'Pandas': Skill('Pandas', 'pandas.png'),
    'Bash': Skill('Bash', 'bash.png'),
    'Git': Skill('Git', 'git.png'),
    'SQL': Skill('SQL', 'sql.png'),
    'C': Skill('C', 'c.png'),
    'C++': Skill('C++', 'c++.png'),
    'NumPy': Skill('NumPy', 'numpy.png'),
    'TensorFlow': Skill('TensorFlow', 'tensorflow.png'),
    'Horovod': Skill('Horovod', 'horovod.png'),
    'Solidity': Skill('Solidity', 'ethereum.png'),
  };

  var skillKeys = Object.keys(skills);
  skillKeys.map((skill) => {
    return skills[skill].skill();
  });
})
