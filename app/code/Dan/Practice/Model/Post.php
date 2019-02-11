<?php
namespace Dan\Practice\Model;
class Post extends \Magento\Framework\Model\AbstractModel implements \Magento\Framework\DataObject\IdentityInterface
{
	const CACHE_TAG = 'dan_practice_post';

	protected $_cacheTag = 'dan_practice_post';

	protected $_eventPrefix = 'dan_practice_post';

	protected function _construct()
	{
		$this->_init('Dan\Practice\Model\ResourceModel\Post');
	}

	public function getIdentities()
	{
		return [self::CACHE_TAG . '_' . $this->getId()];
	}

	public function getDefaultValues()
	{
		$values = [];

		return $values;
	}
}
