# Base64 Image Upload

Add images in base64 in the editor instead of uploading to a server.

# Install

    npm install --save https://github.com/ajite/editorjs-image-base64

# Usage

    import uploader  from '@editorjs/image-base64';

    var editors = new EditorJS({
        autofocus: true,
        tools: {
            image: {
                class: ImageTool,
                config: {
                    ...
                    uploader
                }
            },
        },
    });

# Build

    npm run build

# Build for Dev

    npm run build:dev