export enum ContentType {
    // Dados estruturados
    JSON = "application/json",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",
    XML = "application/xml",
    TEXT_XML = "text/xml",

    // Texto
    TEXT = "text/plain",
    HTML = "text/html",
    CSV = "text/csv",
    MARKDOWN = "text/markdown",

    // Arquivos
    PDF = "application/pdf",
    ZIP = "application/zip",
    OCTET_STREAM = "application/octet-stream",

    // Imagens
    PNG = "image/png",
    JPEG = "image/jpeg",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",
    ICO = "image/x-icon",

    // Áudio e vídeo
    MP3 = "audio/mpeg",
    MPEG = "video/mpeg",
    MP4 = "video/mp4",
    OGG = "application/ogg",

    // Outros
    NDJSON = "application/x-ndjson",
    EVENT_STREAM = "text/event-stream",
}
