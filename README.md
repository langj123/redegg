# Red Egg Theme

The Red Egg Theme uses npm. Contains an existing package.json file.


## Blocks building


    ****** npm related **********

    To initialize package within redegg/support run:

        npm init

    To watch files run:

        npm run dev

    To build files run:

        npm run build
    

    ****** blocks building  **********

    Within blocks folder is the index.js file which you can add new blocks as needed. For example:

        import "./my-awesome-block";

    Build file is output to /support/assets/js/editor.blocks.js
    
    Blocks build has (index.js, save.js, edit.js). Each block contains styles within corresponding block folder. 
    
    
    ****** enqueue scripts  **********
  
    Blocks are enqueued in the functions.php file
    
   
### Slides Block

    ****** Slides Settings  **********
    
    Slides block contains settings for the following:
    1. Autoplay
    2. Loop
    3. Show Navigation Arrows
    4. Show Dot Indicators
    
Has Slide block as a child, which uses MediaUpload and RichText components. Utilizes third party scripts from [Slick Slider](https://kenwheeler.github.io/slick/)
    
    
![preview image for slides block](https://github.com/langj123/redegg/blob/main/wp-content/themes/redegg/support/blocks/slides/preview.png)



