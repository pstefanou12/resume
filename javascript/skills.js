/*
 * entire skill timeline/dashboard
*/

$(document).ready(function() {
  var skills = {
    'React': Skill('React', 'react.png', 'https://reactjs.org'),
    'Redux': Skill('Redux', 'redux.png', 'https://redux.js.org'),
    'Node': Skill('Node', 'node.svg.png', 'https://nodejs.org/en/'),
    'D3': Skill('D3', 'd3.png', 'https://d3js.org'),
    'CSS': Skill('CSS', 'css.svg.png', 'https://www.w3schools.com/css/'),
    'SASS': Skill('SASS', 'sass.svg', 'https://sass-lang.com'),
    'HTML': Skill('HTML', 'html.png', 'https://www.w3schools.com/html/'),
    'JavaScript': Skill('JavaScript', 'javascript.png', 'https://www.w3schools.com/js/'),
    'jQuery': Skill('jQuery', 'jquery.png', 'https://jquery.com'),
    'Python': Skill('Python', 'python.png', 'https://www.python.org'),
    'Flask': Skill('Flask', 'flask.png', 'https://palletsprojects.com/p/flask/'),
    'Java': Skill('Java', 'java.png', 'https://www.java.com/en/download/'),
    'Pandas': Skill('Pandas', 'pandas.png', 'https://pandas.pydata.org'),
    'Bash': Skill('Bash', 'bash.png', 'https://www.gnu.org/software/bash/'),
    'Git': Skill('Git', 'git.png', 'https://git-scm.com'),
    'SQL': Skill('SQL', 'sql.png', 'https://www.w3schools.com/sql/'),
    'C': Skill('C', 'c.png', 'https://www.tutorialspoint.com/cprogramming/index.htm'),
    'C++': Skill('C++', 'c++.png', 'https://www.w3schools.com/cpp/'),
    'NumPy': Skill('NumPy', 'numpy.png', 'https://www.numpy.org'),
    'TensorFlow': Skill('TensorFlow', 'tensorflow.png', 'https://www.tensorflow.org'),
    'Horovod': Skill('Horovod', 'horovod.png', 'https://github.com/horovod/horovod'),
    'Solidity': Skill('Solidity', 'ethereum.png', 'https://solidity.readthedocs.io/en/v0.5.10/'),
  };

  var skillKeys = Object.keys(skills);
  skillKeys.map((skill) => {
    return skills[skill].skill();
  });
})
