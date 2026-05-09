from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Colors
BG_DARK = RGBColor(0x0B, 0x0F, 0x12)
BG_CARD = RGBColor(0x14, 0x1A, 0x1F)
ACCENT = RGBColor(0xC8, 0xF5, 0x4E)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
GRAY = RGBColor(0x9C, 0xA3, 0xAF)
ORANGE = RGBColor(0xFF, 0x98, 0x00)
BLUE = RGBColor(0x38, 0xBD, 0xF8)
GREEN = RGBColor(0x4A, 0xDE, 0x80)
PURPLE = RGBColor(0xA7, 0x8B, 0xFA)
RED_LIGHT = RGBColor(0xFB, 0x92, 0x3C)

def set_bg(slide, color):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color

def add_text(slide, left, top, width, height, text, size=18, color=WHITE, bold=False, align=PP_ALIGN.LEFT):
    txBox = slide.shapes.add_textbox(Inches(left), Inches(top), Inches(width), Inches(height))
    tf = txBox.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.alignment = align
    return tf

def add_para(tf, text, size=18, color=WHITE, bold=False):
    p = tf.add_paragraph()
    p.text = text
    p.font.size = Pt(size)
    p.font.color.rgb = color
    p.font.bold = bold
    return p

def add_rect(slide, left, top, width, height, color):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left), Inches(top), Inches(width), Inches(height))
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    shape.shadow.inherit = False
    return shape

def add_pill(slide, left, top, text, bg_color=ACCENT, text_color=BG_DARK):
    shape = add_rect(slide, left, top, 3.2, 0.45, bg_color)
    shape.text_frame.paragraphs[0].text = text
    shape.text_frame.paragraphs[0].font.size = Pt(12)
    shape.text_frame.paragraphs[0].font.bold = True
    shape.text_frame.paragraphs[0].font.color.rgb = text_color
    shape.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER

# ============ SLIDE 1: PORTADA ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
# Accent line
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 1, 1.2, 11, 0.6, "PROYECTO FINAL  |  CLOUD COMPUTING", 14, ACCENT, True, PP_ALIGN.CENTER)
add_text(slide, 1, 2.0, 11, 1.5, "Arquitectura Serverless\nen Amazon Web Services", 48, WHITE, True, PP_ALIGN.CENTER)
add_text(slide, 1, 3.8, 11, 0.8, "Adelux Padel Club & Community", 28, GRAY, False, PP_ALIGN.CENTER)
# Divider
add_rect(slide, 5.5, 5.0, 2.3, 0.04, ACCENT)
add_text(slide, 1, 5.3, 11, 0.5, "Diego Montero  &  Yamely Abregu", 20, WHITE, True, PP_ALIGN.CENTER)
add_text(slide, 1, 5.9, 11, 0.5, "Mayo 2026", 14, GRAY, False, PP_ALIGN.CENTER)

# ============ SLIDE 2: AGENDA ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "AGENDA", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "¿Qué veremos hoy?", 36, WHITE, True)

items = [
    ("01", "Introducción al Proyecto", "Qué es Adelux y por qué migramos a la nube"),
    ("02", "Arquitectura en AWS", "Los 5 servicios que utilizamos y cómo se conectan"),
    ("03", "Frontend: Amazon S3", "Hosting estático escalable"),
    ("04", "Backend: API Gateway + Lambda + DynamoDB", "Arquitectura Serverless"),
    ("05", "Notificaciones: Amazon SNS", "Alertas en tiempo real"),
    ("06", "Demostración en Vivo", "Prueba funcional del sistema completo"),
]
for i, (num, title, desc) in enumerate(items):
    y = 2.0 + i * 0.85
    add_text(slide, 1.2, y, 0.6, 0.5, num, 24, ACCENT, True)
    add_text(slide, 2.0, y, 4, 0.35, title, 18, WHITE, True)
    add_text(slide, 2.0, y + 0.35, 6, 0.3, desc, 13, GRAY)

# ============ SLIDE 3: INTRO PROYECTO ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "01  INTRODUCCIÓN", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "¿Qué es Adelux?", 36, WHITE, True)

add_text(slide, 0.8, 2.0, 6, 3.5,
    "Adelux es una aplicación web para un club de Pádel que incluye:\n\n"
    "•  Landing page moderna y responsive\n"
    "•  Sistema de reserva de canchas\n"
    "•  Sección de academia y coaching\n"
    "•  Blog, eventos y torneos\n"
    "•  Newsletter para captura de leads\n\n"
    "Desarrollada en React 19 con Vite como bundler.",
    16, GRAY)

# Right card
card = add_rect(slide, 7.8, 2.0, 4.8, 4.5, BG_CARD)
tf = card.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "\n  El Problema"
p.font.size = Pt(20)
p.font.color.rgb = ACCENT
p.font.bold = True
add_para(tf, "\n  Teníamos el proyecto funcionando\n  solo en localhost.", 15, GRAY)
add_para(tf, "\n  El Objetivo", 20, ORANGE, True)
add_para(tf, "\n  Migrar a una arquitectura cloud\n  profesional usando servicios de\n  AWS que sea escalable y\n  demuestre automatización.", 15, GRAY)

# ============ SLIDE 4: ARQUITECTURA GENERAL ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "02  ARQUITECTURA", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "Diagrama de Arquitectura AWS", 36, WHITE, True)

# Flow boxes
services = [
    (0.5, 3.2, "Usuario", "Navegador Web", GRAY),
    (3.0, 3.2, "Amazon S3", "Hosting Estático\n(React/Vite)", BLUE),
    (5.5, 3.2, "API Gateway", "REST API\n(Endpoint POST)", ORANGE),
    (8.0, 3.2, "AWS Lambda", "Función Node.js\n(Lógica Backend)", PURPLE),
    (10.5, 2.2, "DynamoDB", "Base de Datos\nNoSQL", GREEN),
    (10.5, 4.5, "Amazon SNS", "Notificaciones\npor Email", RED_LIGHT),
]
for x, y, title, desc, color in services:
    card = add_rect(slide, x, y, 2.2, 1.5, BG_CARD)
    tf = card.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = f"\n  {title}"
    p.font.size = Pt(14)
    p.font.color.rgb = color
    p.font.bold = True
    add_para(tf, f"  {desc}", 11, GRAY)

# Arrows
for x in [2.7, 5.2, 7.7]:
    add_text(slide, x, 3.7, 0.4, 0.4, "→", 28, ACCENT, True)
add_text(slide, 10.2, 3.7, 0.4, 0.4, "→", 28, ACCENT, True)

add_text(slide, 0.8, 5.8, 11, 0.5, "Flujo:  Usuario → S3 (Frontend) → API Gateway → Lambda → DynamoDB + SNS", 14, GRAY, False, PP_ALIGN.CENTER)

# ============ SLIDE 5: AMAZON S3 ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "03  FRONTEND", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "Amazon S3 — Hosting Estático", 36, WHITE, True)

# What we did
add_text(slide, 0.8, 2.0, 5.5, 0.4, "¿Qué hicimos?", 20, ACCENT, True)
add_text(slide, 0.8, 2.5, 5.5, 2.5,
    "•  Compilamos React con 'npm run build'\n"
    "•  Generamos archivos HTML, CSS y JS optimizados\n"
    "•  Creamos un Bucket S3 con acceso público\n"
    "•  Activamos 'Static Website Hosting'\n"
    "•  Subimos el contenido de la carpeta dist/", 15, GRAY)

# Advantages card
card = add_rect(slide, 7.0, 2.0, 5.5, 2.0, BG_CARD)
tf = card.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.text = "\n  ✓  Ventajas"; p.font.size = Pt(18); p.font.color.rgb = GREEN; p.font.bold = True
add_para(tf, "  •  Durabilidad del 99.999999999% (11 nueves)", 13, GRAY)
add_para(tf, "  •  Escalabilidad infinita y automática", 13, GRAY)
add_para(tf, "  •  Costo casi $0 para sitios de bajo tráfico", 13, GRAY)

# Disadvantage card
card2 = add_rect(slide, 7.0, 4.3, 5.5, 1.8, BG_CARD)
tf2 = card2.text_frame; tf2.word_wrap = True
p2 = tf2.paragraphs[0]; p2.text = "\n  ✗  Limitación conocida"; p2.font.size = Pt(18); p2.font.color.rgb = ORANGE; p2.font.bold = True
add_para(tf2, "  •  No incluye HTTPS ni CDN por defecto", 13, GRAY)
add_para(tf2, "  •  Solución: agregar Amazon CloudFront", 13, GRAY)

# ============ SLIDE 6: API GATEWAY ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "04  BACKEND — PARTE 1", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "Amazon API Gateway", 36, WHITE, True)

add_text(slide, 0.8, 2.0, 5.5, 0.4, "¿Qué es?", 20, ORANGE, True)
add_text(slide, 0.8, 2.5, 5.5, 1.5,
    "API Gateway es la puerta de entrada segura\n"
    "a nuestro backend. Funciona como un proxy\n"
    "que recibe las peticiones HTTP del frontend\n"
    "y las redirige a Lambda.", 15, GRAY)

add_text(slide, 0.8, 4.2, 5.5, 0.4, "¿Qué configuramos?", 20, ORANGE, True)
add_text(slide, 0.8, 4.7, 5.5, 2.0,
    "•  Creamos una API REST\n"
    "•  Recurso: /subscribe (método POST)\n"
    "•  Integración: Proxy de Lambda\n"
    "•  Habilitamos CORS para el frontend\n"
    "•  Desplegamos en la etapa 'prod'", 15, GRAY)

card = add_rect(slide, 7.0, 2.0, 5.5, 2.0, BG_CARD)
tf = card.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.text = "\n  ✓  Ventajas"; p.font.size = Pt(18); p.font.color.rgb = GREEN; p.font.bold = True
add_para(tf, "  •  Escala automáticamente", 13, GRAY)
add_para(tf, "  •  Throttling y rate-limiting incluido", 13, GRAY)
add_para(tf, "  •  Monitoreo con CloudWatch integrado", 13, GRAY)

# ============ SLIDE 7: LAMBDA ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "04  BACKEND — PARTE 2", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "AWS Lambda — Lógica de Negocio", 36, WHITE, True)

add_text(slide, 0.8, 2.0, 5.5, 0.4, "¿Qué hace nuestra función?", 20, PURPLE, True)
add_text(slide, 0.8, 2.5, 5.5, 2.0,
    "Nuestra función Lambda en Node.js ejecuta\n"
    "dos acciones en paralelo:\n\n"
    "1. Guarda el email en DynamoDB\n"
    "2. Publica una notificación en SNS\n\n"
    "Todo esto ocurre en menos de 1 segundo.", 15, GRAY)

add_text(slide, 0.8, 5.0, 5.5, 0.4, "Modelo Serverless (Sin servidor)", 18, ACCENT, True)
add_text(slide, 0.8, 5.5, 5.5, 1.2,
    "No gestionamos servidores. AWS se encarga\n"
    "de escalar, parchear y mantener la infra.", 14, GRAY)

card = add_rect(slide, 7.0, 2.0, 5.5, 2.0, BG_CARD)
tf = card.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.text = "\n  ✓  Ventajas"; p.font.size = Pt(18); p.font.color.rgb = GREEN; p.font.bold = True
add_para(tf, "  •  Pago por uso ($0 si no se ejecuta)", 13, GRAY)
add_para(tf, "  •  Escala de 1 a 10,000 requests/seg", 13, GRAY)
add_para(tf, "  •  Sin mantenimiento de servidores", 13, GRAY)

card2 = add_rect(slide, 7.0, 4.3, 5.5, 1.8, BG_CARD)
tf2 = card2.text_frame; tf2.word_wrap = True
p2 = tf2.paragraphs[0]; p2.text = "\n  ✗  Limitación conocida"; p2.font.size = Pt(18); p2.font.color.rgb = ORANGE; p2.font.bold = True
add_para(tf2, '  •  "Cold Start": Retraso de 1-2s en la', 13, GRAY)
add_para(tf2, "     primera ejecución tras inactividad", 13, GRAY)

# ============ SLIDE 8: DYNAMODB ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "04  BACKEND — PARTE 3", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "Amazon DynamoDB — Base de Datos", 36, WHITE, True)

add_text(slide, 0.8, 2.0, 5.5, 0.4, "¿Qué almacenamos?", 20, GREEN, True)
add_text(slide, 0.8, 2.5, 5.5, 2.0,
    "Tabla: AdeluxSubscribers\n\n"
    "•  Partition Key: email (String)\n"
    "•  Atributo: timestamp (fecha/hora)\n\n"
    "Cada suscripción queda registrada con\n"
    "el correo y la fecha exacta.", 15, GRAY)

add_text(slide, 0.8, 5.0, 5.5, 0.4, "¿Por qué NoSQL y no SQL?", 18, ACCENT, True)
add_text(slide, 0.8, 5.5, 5.5, 1.2,
    "Nuestros datos son simples (email + fecha).\n"
    "No necesitamos JOINs ni relaciones complejas.", 14, GRAY)

card = add_rect(slide, 7.0, 2.0, 5.5, 2.5, BG_CARD)
tf = card.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.text = "\n  ✓  Ventajas"; p.font.size = Pt(18); p.font.color.rgb = GREEN; p.font.bold = True
add_para(tf, "  •  Latencia de milisegundos", 13, GRAY)
add_para(tf, "  •  Escala automática sin límite", 13, GRAY)
add_para(tf, "  •  Modelo sin esquema (flexible)", 13, GRAY)
add_para(tf, "  •  Integración nativa con Lambda", 13, GRAY)

# ============ SLIDE 9: SNS ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "05  NOTIFICACIONES", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "Amazon SNS — Alertas en Tiempo Real", 36, WHITE, True)

add_text(slide, 0.8, 2.0, 5.5, 0.4, "Patrón Pub/Sub", 20, RED_LIGHT, True)
add_text(slide, 0.8, 2.5, 5.5, 2.5,
    "SNS funciona con el patrón Publicador/Suscriptor:\n\n"
    "•  Lambda PUBLICA un mensaje en el Tema\n"
    "•  Todos los suscriptores del tema reciben\n"
    "   la notificación automáticamente\n\n"
    "En nuestro caso, tanto Diego como Yamely\n"
    "reciben el correo de alerta simultáneamente.", 15, GRAY)

card = add_rect(slide, 7.0, 2.0, 5.5, 3.0, BG_CARD)
tf = card.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.text = "\n  Configuración"; p.font.size = Pt(18); p.font.color.rgb = RED_LIGHT; p.font.bold = True
add_para(tf, "", 8, GRAY)
add_para(tf, "  Tema: AdeluxAlerts", 14, WHITE, True)
add_para(tf, "  Protocolo: Email", 14, WHITE, True)
add_para(tf, "", 8, GRAY)
add_para(tf, "  Suscriptores:", 14, GRAY)
add_para(tf, "  •  Diego Montero (email)", 13, GRAY)
add_para(tf, "  •  Yamely Abregu (email)", 13, GRAY)

add_text(slide, 0.8, 5.5, 11, 0.6,
    "Cuando un usuario se suscribe → Lambda guarda en DB → Lambda notifica por SNS → Correo llega a ambos administradores", 13, ACCENT, False, PP_ALIGN.CENTER)

# ============ SLIDE 10: DEMO ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 1, 1.5, 11, 1.0, "DEMOSTRACIÓN EN VIVO", 48, WHITE, True, PP_ALIGN.CENTER)
add_text(slide, 1, 3.0, 11, 0.6, "Vamos a probar el sistema completo", 24, ACCENT, False, PP_ALIGN.CENTER)

steps = [
    "1.  Abrir la página web alojada en S3",
    "2.  Bajar al formulario Newsletter e ingresar un correo",
    "3.  Hacer clic en 'Subscribe Now'",
    "4.  Verificar la notificación en nuestros celulares (SNS)",
    "5.  Mostrar el registro en la tabla DynamoDB",
]
for i, step in enumerate(steps):
    add_text(slide, 2.5, 4.0 + i * 0.5, 8, 0.4, step, 16, GRAY)

# ============ SLIDE 11: RESUMEN ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 0.8, 0.4, 5, 0.6, "RESUMEN", 14, ACCENT, True)
add_text(slide, 0.8, 0.9, 10, 0.8, "5 Servicios AWS Implementados", 36, WHITE, True)

svc = [
    ("Amazon S3", "Hosting del frontend React", BLUE),
    ("API Gateway", "Endpoint REST seguro", ORANGE),
    ("AWS Lambda", "Lógica backend serverless", PURPLE),
    ("DynamoDB", "Base de datos NoSQL", GREEN),
    ("Amazon SNS", "Notificaciones email", RED_LIGHT),
]
for i, (name, desc, color) in enumerate(svc):
    x = 0.8 + i * 2.45
    card = add_rect(slide, x, 2.2, 2.2, 2.5, BG_CARD)
    tf = card.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = f"\n  {name}"; p.font.size = Pt(15); p.font.color.rgb = color; p.font.bold = True
    add_para(tf, "", 8, GRAY)
    add_para(tf, f"  {desc}", 12, GRAY)

add_text(slide, 0.8, 5.2, 11, 1.5,
    "Conclusión: Logramos migrar de un entorno local a una arquitectura\n"
    "cloud nativa, escalable y automatizada, usando el modelo Serverless\n"
    "de pago por uso de AWS.", 16, GRAY, False, PP_ALIGN.CENTER)

# ============ SLIDE 12: GRACIAS ============
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide, BG_DARK)
add_rect(slide, 0, 0, 13.333, 0.06, ACCENT)
add_text(slide, 1, 2.0, 11, 1.0, "¡Gracias!", 54, WHITE, True, PP_ALIGN.CENTER)
add_text(slide, 1, 3.3, 11, 0.6, "Diego Montero  &  Yamely Abregu", 24, ACCENT, False, PP_ALIGN.CENTER)
add_text(slide, 1, 4.2, 11, 0.6, "¿Preguntas?", 20, GRAY, False, PP_ALIGN.CENTER)
add_rect(slide, 5.5, 5.5, 2.3, 0.04, ACCENT)
add_text(slide, 1, 5.7, 11, 0.5, "Adelux Padel Club  •  AWS Cloud  •  Mayo 2026", 13, GRAY, False, PP_ALIGN.CENTER)

# Save
output_path = r"c:\Users\Diego\Documents\Diego Archivos\Adelux\Presentacion_Adelux_AWS.pptx"
prs.save(output_path)
print(f"Presentacion guardada en: {output_path}")
