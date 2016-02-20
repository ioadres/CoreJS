(function() {
  'use strict';

  app.core.framework.register({
      module: "app.core.framework.components.FriendComponent",
      path: "Components/FriendComponent.js"
  });

  app.core.framework.register({
      module: "app.core.framework.components.UserUlComponent",
      path: "Components/UserUlComponent.js"
  });

  app.core.framework.register({
      module: "app.core.framework.module.userfriendlist.UsuarioService",
      path: "Module/UserFriendList/UsuarioService.js"
  });

  app.core.framework.register({
      module: "app.core.framework.module.userfriendlist.UsuarioViewModel",
      path: "Module/UserFriendList/UsuarioViewModel.js"
  });

  app.core.framework.register({
      module: "app.core.framework.module.userfriendlist.app",
      path: "Module/UserFriendList/app.js"
  });

  app.core.framework.register({
      module: "app.core.framework.module.userfriendlist.bootstrap",
      path: "Module/UserFriendList/bootstrap.js"
  });

})();
