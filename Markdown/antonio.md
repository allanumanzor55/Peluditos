*Vas a trabajar en la rama sprint-3-antonio
especificamente en la carpeta frontend, no tocaras la carpeta backend bajo ningun motivo.*

a continuacion te explicare cada carpeta y para que sirve
assets: para imagenes e iconos
componentes: son componentes html reutilizables, el ejemplo mas practico para que entendas es navbar.vue
router dentro de esa carpeta esta el archivo index.js donde se hara el ruteo de la pagina, para agregar una nueva ruta, creas un nuevo elemento en el arreglo  routes con las siguientes claves: path(la ruta segun la url),el nombre de la ruta y la componente que se pintara (estas se importan el parte superior).

en views vas a crear las componentes que seran paginas del sistema.

los demas archivos estan por demas y no es necesario explicartelos.

___

*Tarea asignada*
Dentro de la carpeta settings vas a crear un panel de configuracion, este panel tendra opciones de configuracion para crear tipos de perfiles de usuario, crear vacunas, razas, departamentos, modulos y roles.

se te adjunta un ejemplo:
https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/c9b5cc2c-dc11-4962-988b-58e16bdcc850/2018/03/06/26e2a797-ebe4-411a-94b3-93523a523147.png

en la view Menu estara ese panel de configuracion y cada una de las cards te llevar a una pagina de configuracion ya sea tipos de perfiles, vacunas, razas, departamentos. tendras que crear las routas en route y enlazar cada card a cada route para que el clickear te lleve ahi (si no queres crear rutas para cada uno, podrias crear divs dentro de la componente de menu para cada opcion de configuracion y que al clickear se muestre ese div y se oculte otro). Crearas views para perfiles, vacunas, razas y departamentos en cada views deberan haber opciones para agregar, eliminar, modificar y ver los registros de la manera que tu veas mejor.

puedes observar la componente Navbar en la carpeta components para observar como se traza una ruta a una view.

**Recalco la carpeta components es para componentes html reutilizables y la carpeta views es para componentes de paginas**

**FECHA DE ENTREGA: LUNES 8 DE NOVIEMBRE**