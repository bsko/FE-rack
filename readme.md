#### Getting started

1. Download [WebSphere Liberty Profile](https://developer.ibm.com/assets/wasdev/) and setup it:

  * Download it and open `/bin` folder

  * Run `server create` to create default server (it will have name `defaultServer`)

  * Go to `/usr/servers/defaultServer` in WebSphere folder and replace file `server.xml` with file `/etc/server.xml` from this repository

  * Fix paths to `ojdbc7.jar`, `activemq-rar-5.14.1.rar` and DB connection URL

  * Open `/bin` in WebSphere folder and run `installUtility install defaultServer` to install features selected in new `server.xml` file

  * Application server is ready

2. Download [SoapUI](https://www.soapui.org/downloads/soapui.html) and setup it:

  * Import SoapUI project from `/etc/WebPortalService-soapui-project.xml`

3. Download [ActiveMQ](http://activemq.apache.org/download-archives.html) and setup it:

  * Download it and open `/bin` folder

  * Run `activemq` to start JMS server

4. Open project in IDE and run it in WebSphere application server
