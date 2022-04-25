<?php

namespace App\Http\Controllers\Helpers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;


class ImageHelper
{
    public function create(
        String $title, String $folder,
        Array $sizes, String $image, String $delete_image
    ){

        if(!empty($delete_image)) {
            $this->delete(folder: $folder, title: $delete_image);
        }
        // get directory path
        $dir =  $this->get_image_path(folder: $folder);

        // check and create a dir if it does not exist
        File::isDirectory($dir) or File::makeDirectory($dir, 0777, true, true);

        $this->ImageHelper(dir: $dir, title: $title, image: $image);

        if(!empty($sizes)) {
            foreach ($sizes as $key => $size) {
                $size_name = '-md';
                if($key == 1) {
                    $size_name = '-sm';
                }
                $this->ImageHelper(
                    dir: $dir, title: $title,
                    image: $image, size: $size,
                    key: $key, size_name: $size_name);
            }
        }
    }
    // resize if there's diff sizes and save
    public function ImageHelper(
        String $dir, String $title,
        String $image, Array $size=[], String $size_name = '')
    {
        if(!empty($size)) {
            $file_name = $this->get_image_name(title: $title .$size_name);
            $path = $dir .$file_name;
            $img = Image::make($image);
            $img->resize($size[0], $size[1], function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $img->encode('jpg', 75);
            $img->save($path);
        } else {
            $path = $dir .$this->get_image_name(title: $title);
            $img = Image::make($image);
            $img->encode('jpg', 75);
            $img->save($path);
        }
    }

    // create image name
    public function get_image_name(String $title, String $format='')
    {
        $title = Str::substr(strip_tags($title), 0, 80);

        if(!empty($format)) {
           return Str::slug($title) .'.' .$format;
        }
        return Str::slug($title) .'.jpg';
    }

    // Create public path
    public function get_image_path(String $folder)
    {
        return public_path('/sydani/assets/img/').$folder .'/';
    }

    // create image name using title
    public function get_image_url(String $folder, String $image_name)
    {
        return asset('sydani/assets/img/'.$folder .'/'. $image_name);
    }

    // delete a file
    public function delete(String $folder, String $title)
    {
        $dir =  $this->get_image_path(folder: $folder);
        $this->check_and_del_file($dir .$this->get_image_name($title));
        $this->check_and_del_file($dir .$this->get_image_name($title .'-sm'));
        $this->check_and_del_file($dir .$this->get_image_name($title. '-md'));
    }

    public function rename(string $folder, string $old, string $new)
    {
        $dir =  $this->get_image_path(folder: $folder);
        $old_file = $dir .$old;
        $new_file = $dir .$this->get_image_name($new);
        if(File::exists($old_file)) {
            try {
                rename($old_file, $new_file);
            } catch (\Throwable $th) {

            }
        }
    }

    public function check_and_del_file($file)
    {
        if (File::exists($file)) {
            File::delete($file);
        }
    }

}
