<?php
/**!info**
{
  "Plugin Name"  : "TinyMCE",
  "Plugin URI"   : "http://enanocms.org/plugin/tinymce",
  "Description"  : "Support for the TinyMCE graphical editor",
  "Author"       : "Dan Fuhry",
  "Version"      : "0.1",
  "Author URI"   : "http://enanocms.org/",
  "Version list" : ['0.1']
}
**!*/

$plugins->attachHook('compile_template', '$template->add_header_js(\'<script type="text/javascript" src="\' . cdnPath . \'/plugins/tinymce/init.js"></script>\');');
$plugins->attachHook('compile_template', '$template->add_header_js(\'<script type="text/javascript" src="\' . cdnPath . \'/plugins/tinymce/editor_hook.js"></script>\');');

function render_text_tinymce($text)
{
	return '?>' . RenderMan::render($text, RENDER_INLINE);
}

$plugins->attachHook('get_page_source', 'get_page_src_tinymce($return["src"]);');

function get_page_src_tinymce(&$text)
{
	// gently process headings to make tinymce format them correctly
	if ( preg_match_all('/^ *?(={1,6}) *(.+?) *\\1 *$/m', $text, $matches) )
	{
		foreach ( $matches[0] as $i => $match )
		{
			$hi = strlen($matches[1][$i]);
			$heading = "<h{$hi}>{$matches[2][$i]}</h{$hi}>";
			$text = str_replace_once($match, $heading, $text);
		}
	}
	return $text;
}
