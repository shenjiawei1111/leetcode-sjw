def maxArea(height):
    """
    此函数用于找出由给定高度数组构成的两条垂线与 x 轴形成的容器能容纳的最大水量。
    :param height: 一个整数数组，代表每条垂线的高度
    :return: 容器可以储存的最大水量
    """
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        current_width = right - left
        current_height = min(height[left], height[right])
        current_water = current_width * current_height
        max_water = max(max_water, current_water)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water
# 以下是使用 maxArea 函数的实例
if __name__ == "__main__":
    # 定义一个高度数组
    height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    # 调用 maxArea 函数计算最大水量
    result = maxArea(height)
    # 打印结果
    print(f"由数组 {height} 构成的容器能容纳的最大水量为: {result}")
