window.addEventListener('load', function () {
  var that;

  class Tab {
    constructor(id) {
      that = this;
      this.mainTab = document.querySelector(id);
      this.add = this.mainTab.querySelector('.tabadd');
      this.ul = this.mainTab.querySelector('.fisrstnav ul');
      this.tabscon = this.mainTab.querySelector('.tabscon');
      // this.ul = this.mainTab.querySelector('.fisrstnav ul:first-child');
      this.init();
    }

    updateNode() {
      // 获取所有的li控件，但是这些控件都是动态的，是变化的，所以之后肯定需要频繁调用
      that.lis = that.mainTab.querySelectorAll('li');
      that.sections = that.mainTab.querySelectorAll('.tabscon section');
      that.removeBtn = that.mainTab.querySelectorAll('.icon-guanbi');
      that.spans = that.mainTab.querySelectorAll('.fisrstnav li span:first-child');
    }

    init() {
      this.updateNode();
      //绑定点击事件
      for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i;
        this.lis[i].onclick = this.toggleTab;
        this.removeBtn[i].onclick = this.removeTab;
        this.spans[i].ondblclick = this.editorTab;
        this.sections[i].ondblclick = this.editorTab;
      }
      this.add.onclick = this.addTab;
    }
    //四个功能
    // 切换标签和内容
    clearClass() {
      for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].className = "";
        that.sections[i].className = "";
      }
    }
    toggleTab() {
      that.clearClass();
      this.className = "liactive";
      that.sections[this.index].className = 'conactive';
      // console.log(this.index);
    }
    // 修改标签内容和文本内容
    editorTab(e) {
      // alert(1);
      // 取消双击选中文本的操作，不过我试了一下没暖用，有个同学说可以使用阻止默认操作,还不如老师说的
      // window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
      // e.preventDefault();不行
      //css添加user-select:none 最完美
      var str = this.innerHTML;
      this.innerHTML = '<input type="text"/>';
      var input = this.children[0];
      if (input) {
        // 阻止冒泡产生的双击bug在input中双击，就会传到父类去，这里不需要传过去
        input.ondblclick = function (e) {
          e.stopPropagation();
        }
      }
      this.children[0].value = str;
      this.children[0].select();
      // 输入框失去了焦点
      input.onblur = function () {
        //这里注意this是input而不是span了，这个this太坑了，我需要休息一下
        this.parentNode.innerHTML = this.value;
      }
      input.onkeyup = function (e) {
        // 按下回车按钮
        if (e.keyCode === 13) {
          this.blur();
        }
      }
    }
    // 添加标签和内容
    addTab() {
      // 注意：第一是新方法，第二是注意清除和更新，把屁股搽干净，并重新绑定事件
      var random = Math.random();
      var li = '<li class="liactive"><span>new</span><span class="iconfont icon-guanbi"></span></li>';
      var span = '<section class="conactive">new' + random + '</section>';
      that.ul.insertAdjacentHTML('beforeend', li);
      that.tabscon.insertAdjacentHTML('beforeend', span);
      that.clearClass();
      that.init();
    }
    // 删除标签和内容
    removeTab(e) {
      // 阻止冒泡
      e.stopPropagation();
      var index = this.parentNode.index;
      // console.log(index);
      that.lis[index].remove();
      that.sections[index].remove();
      that.init();
      //如果选项卡里有选择状态，那么就不要再重新选择，就不用做下面的点击事件了
      if (document.querySelector('.liactive')) return;
      index--;
      //默认选择删除的前面一个元素，这里有一个非常巧妙的技巧，就是使用一次点击事件，就会把标签页和内容切换过去
      //但是删除第一个的时候，就会出问题，因为index=-1，使用&&符号
      that.lis[index] && that.lis[index].click();
    }
  }
  var mainTab = new Tab('#tab')
})