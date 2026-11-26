# Registro de prompts, fuentes y revisión (Entrega 2)

## Infografía histórica

- **Herramienta:** NotebookLM (Gemini Notebook).
- **Cuaderno:** "Innovación y Logística en Amazon".
- **Ajustes:** español, orientación vertical, nivel de detalle "Detallado".

### Fuentes del cuaderno

1. Diez años de robótica en Amazon: https://www.aboutamazon.com/news/operations/10-years-of-amazon-robotics-how-robots-help-sort-packages-move-product-and-improve-safety
2. Amazon: un millón de robots y DeepFleet: https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model
3. Primer centro logístico de Amazon en España: https://press.aboutamazon.com/es/2012/7/el-primer-centro-logistico-de-amazon-en-espana-ya-esta-operativo-y-ha-enviado-sus-primeros-pedidos-a-clientes
4. El garaje de Jeff Bezos: https://www.aboutamazon.com/news/workplace/first-amazon-office-jeff-bezos-garage
5. Mi tabla de hitos (texto pegado).

### Prompt 1

> Crea una infografía en español sobre la evolución de Amazon. Usa únicamente los 6 hitos de mi "Tabla de hitos de Amazon" y las fuentes seleccionadas. Para cada hito muestra el año y una frase que explique qué cambió. Destaca los cambios tecnológicos, sobre todo los de 2012 (robots Kiva) y 2025 (un millón de robots e IA DeepFleet), que cambiaron la preparación de pedidos en el almacén. Añade una comparación breve de cómo se prepara un pedido antes y después de los robots. Si una fecha es aproximada, conserva esa indicación. Usa colores azul marino y naranja, un diseño legible y evita añadir hechos que no aparezcan en las fuentes.

**Revisión:** faltaban los años de AWS (2006), Kiva (2012) y la década de robótica (2022), y el hito de 2022 aparecía después de 2025. No la usé.

### Prompt 2

Un intento más largo, pidiendo los 6 hitos en orden con su año, dio el error "No se ha podido generar la infografía".

### Prompt 3 (versión final)

> Línea del tiempo en español de los 6 hitos de mi tabla, en orden y cada uno con su año visible: 1994-1995, 2006, 2011-2012, 2012, 2022 y 2025. Destaca 2012 y 2025 (preparación de pedidos con robots). Termina con una comparación antes/después de preparar un pedido. Colores azul marino y naranja.

**Revisión:** los 6 hitos aparecen en orden y con su año, y 2012 y 2025 van destacados. Las cifras coinciden con mi tabla: 520.000 unidades robóticas, un millón de robots y un 10 % en DeepFleet. Lo único que añade es que AWS "refuerza la capacidad operativa global", que es una interpretación general.

**Archivo:** `infografia_NotebookLM.png`. En la web: `proyecto-amazon/img/infografia-notebooklm.jpg`.

## Esquemas

- **Herramienta:** Claude (IA). Lo revisé comparándolo con mi tabla de hitos y las fuentes.
- **Esquema del proceso antes y después** (`proyecto-amazon/img/esquema-proceso.svg`): compara la tarea, la tecnología, la información que circula y lo que cambió para las personas al preparar un pedido sin robots y con robots.
  - Fuentes: Diez años de robótica en Amazon; Amazon: un millón de robots.
- **Esquema de departamentos y mercados** (`proyecto-amazon/img/esquema-departamentos.svg`): muestra los segmentos de Amazon (Norteamérica, Internacional y AWS), los departamentos que participan en el pedido y el mercado español.
  - Fuentes: informes anuales de Amazon; notas de prensa de Amazon España.

**Revisión:** las fechas (2011, 2012 y 2026) y las cifras (unas 40 instalaciones en España) coinciden con las notas de prensa de Amazon España.
