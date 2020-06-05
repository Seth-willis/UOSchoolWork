count = 0
count_penalty = 5
max_count = 60
correct_answer_count = 0
scores = []
i = null

next_problem = 0
problems = [
  {
    'statement':'Are you smart enough?',
    'choices':['Yes','No','Maybe'],
    'correct_choice': 'Yes'
  },
  {
    'statement':'Are you old enough?',
    'choices':['Yes','No','Maybe'],
    'correct_choice': 'Yes'
  },
  {
    'statement':'Hows it going?',
    'choices':['Good','Bad','SoSo'],
    'correct_choice': 'Good'
  },
  {
    'statement':'Hows the day?',
    'choices':['Warm','Cold','Chilly'],
    'correct_choice': 'Warm'
  }
]

show_next_problem = function(){
    problem = problems[next_problem]
    console.log(problem)
    if(problem){
      statement_div.innerHTML = problem.statement
      choices_div.innerHTML = problem.choices.map(element => "<option>"+element+"</option>").join('');
    } else {
      game_over()
    }
  
}


okay_button_on_click = function(){
  choice = choices_div.value
  correct_choice = problems[next_problem].correct_choice
  if (choice != correct_choice ) {
    console.log('Incorrect!')
    count = count + count_penalty
  } else {
    console.log('Correct!')
    correct_answer_count = correct_answer_count + 1
    quiz_status.innerHTML = correct_answer_count
  }
  next_problem = next_problem + 1
  show_next_problem()
}

onIntervalTick = function(){
    count = count + 1;
    time_remaining_span.innerHTML = max_count - count
  if(count > max_count){
    game_over()
  }
}

start_ticks = function(){
    i = setInterval(onIntervalTick,1000)  
  }
current_count_target = document.getElementById('current_value_of_count')
start_screen_div = document.getElementById("start_screen")
quiz = document.getElementById("quiz")
quiz_status = document.getElementById("quiz_status")
game_over_status = document.getElementById("game_over_status")
status_div = document.getElementById("status")
game_over_div = document.getElementById("game_over")
reset_button = document.getElementById("reset_button")
start_button = document.getElementById("start_button")
time_remaining_span = document.getElementById("time_remaining")
statement_div = document.getElementById("statement")
choices_div = document.getElementById("choices")
okay_button = document.getElementById("ok_button")
scores_element = document.getElementById("scores")

reset_button_on_click = function(){
    count = 0
    next_problem = 0
    correct_answer_count = 0
    set_panel_states('vhh')  
  }
  start_button_on_click = function(){
    start_ticks()
    set_panel_states('hvh')
  }
  game_over = function(){
    scores.push(correct_answer_count)
    scores_element.innerHTML = scores.map(element => "<li>"+element+"</li>").join('');
    clearInterval(i)
    set_panel_states('hhv')
}
set_panel_states = function(s){
    map = {
      'v': 'visible',
      'h': 'hidden'
    }
    start_screen_div.style.visibility=map[s[0]];
    quiz.style.visibility=map[s[1]];
    game_over_div.style.visibility=map[s[2]];
}
set_panel_states('vhh')
show_next_problem()
reset_button.addEventListener('click',reset_button_on_click)
start_button.addEventListener('click',start_button_on_click)
okay_button.addEventListener('click',okay_button_on_click)