'use strict';
(() => {


  const todoForm = document.getElementById('todo_form');
  const add = document.getElementById('add');
  const taskUl = document.getElementById('task_ul');
  const compUl = document.getElementById('comp_ul');
  const taskTitle = document.querySelector('.task_title');
  const compTitle = document.querySelector('.comp_title');
  


/*
  function addTask(doMessage) {
    //タスク要素作成・・・
    taskTitle.style.display = 'inline-block';
    tasks.push(doMessage);
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = "checkbox";
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = doMessage;
    let a = document.createElement('a');
    a.innerHTML = '削除';
    li.appendChild(input);
    li.appendChild(div);
    div.appendChild(span);
    div.appendChild(a);
    taskUl.appendChild(li);
    //・・・タスク要素作成

    a.addEventListener('click', () => {  //タスクを削除
      li.remove();
      tasks = tasks.filter(task => {
      return task !== doMessage;
      });
      if(!tasks.length) taskTitle.style.display = 'none';
    });

    input.addEventListener('change', () => {  //タスク完了
      addComp(doMessage);
      tasks = tasks.filter(task => {
        return task !== doMessage;
      });
      li.remove();
      if(!tasks.length) taskTitle.style.display = 'none';
    });
  }




  function addComp(doMessage) {
    compTitle.style.display = 'inline-block';
    compedTasks.push(doMessage);
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = "checkbox";
    input.checked = "checked";
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = doMessage;
    li.appendChild(input);
    li.appendChild(div);
    div.appendChild(span);
    compUl.appendChild(li);

    input.addEventListener('change', () => {  //todoに戻す
      addTask(doMessage);
      compedTasks = compedTasks.filter(compedTask => {
        return compedTask !== doMessage;
      });
      li.remove();
      if(!compedTasks.length) compTitle.style.display = 'none';
    });
  }


  
  

  
  todoForm.addEventListener('submit', (e) => {
    let doMessage = add.value;
    if(doMessage !== '') {
      addTask(doMessage);
    }
    document.todo_form.reset();
  });

  taskTitle.addEventListener('click', () => {
    taskUl.classList.toggle('close');
    taskTitle.classList.toggle('close');
    document.querySelector('.tasks').classList.toggle('close');
  });

  compTitle.addEventListener('click', () => {
    compUl.classList.toggle('close');
    compTitle.classList.toggle('close');
    document.querySelector('.comps').classList.toggle('close');
  });

*/

  

  window.onload = function() {
    if(taskUl.childElementCount) {
      taskTitle.style.display = 'inline-block';
    } else {
      taskTitle.style.display = 'none';
    }
    if(compUl.childElementCount) {
      compTitle.style.display = 'inline-block';
    } else {
      compTitle.style.display = 'none';
    }
  }

  taskTitle.addEventListener('click', () => {
    taskUl.classList.toggle('close');
    taskTitle.classList.toggle('close');
    document.querySelector('.tasks').classList.toggle('close');
  });

  compTitle.addEventListener('click', () => {
    compUl.classList.toggle('close');
    compTitle.classList.toggle('close');
    document.querySelector('.comps').classList.toggle('close');
  });

  


  


























})();